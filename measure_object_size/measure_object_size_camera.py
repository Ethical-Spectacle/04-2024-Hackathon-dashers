import cv2
import uvicorn
import itertools
import numpy as np
from object_detector import *
from box_render import draw_box

from fastapi import FastAPI, WebSocket
import threading
import asyncio

app = FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        # Load Aruco detector
        parameters = cv2.aruco.DetectorParameters()
        aruco_dict = cv2.aruco.getPredefinedDictionary(cv2.aruco.DICT_5X5_50)


        # Load Object Detector
        detector = HomogeneousBgDetector()
        final_list = []
        maxArea = 0
        # Variables for the largest object
        largest_object_rect = None
        largest_object_width = 0
        largest_object_height = 0
        largest_object_center = (0, 0)

        # Load Cap
        cap = cv2.VideoCapture('http://192.168.210.114:8080/video')
        cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)
        cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)

        while True:
            _, img = cap.read()

            # Get Aruco marker
            corners, _, _ = cv2.aruco.detectMarkers(img, aruco_dict, parameters=parameters)
            if corners:
                # Draw polygon around the marker
                int_corners = np.int0(corners)
                cv2.polylines(img, int_corners, True, (0, 255, 0), 5)

                # Aruco Perimeter
                aruco_perimeter = cv2.arcLength(corners[0], True)

                # Pixel to cm ratio
                pixel_cm_ratio = aruco_perimeter / 20

                contours = detector.detect_objects(img)

                # Reset largest object data for each frame
                maxArea = 0
                largest_object_rect = None

                # Identify the largest object
                for cnt in contours:
                    rect = cv2.minAreaRect(cnt)
                    (x, y), (w, h), angle = rect

                    object_width = w / pixel_cm_ratio
                    object_height = h / pixel_cm_ratio

                    # Calculate object area and compare
                    area = w * h
                    if area > maxArea and not (round(object_width) == 5 and round(object_height) == 5):
                        maxArea = area
                        largest_object_rect = rect
                        largest_object_width = object_width
                        largest_object_height = object_height
                        largest_object_center = (int(x), int(y))

                # Draw the largest object after identifying it
                if largest_object_rect is not None:
                    box = cv2.boxPoints(largest_object_rect)
                    box = np.int0(box)
                    cv2.polylines(img, [box], True, (255, 0, 0), 2)
                    cv2.putText(img, "Width {} cm".format(round(largest_object_width, 1)), (largest_object_center[0] - 100, largest_object_center[1] - 20), cv2.FONT_HERSHEY_PLAIN, 2, (100, 200, 0), 2)
                    cv2.putText(img, "Height {} cm".format(round(largest_object_height, 1)), (largest_object_center[0] - 100, largest_object_center[1] + 15), cv2.FONT_HERSHEY_PLAIN, 2, (100, 200, 0), 2)

            cv2.imshow("Image", img)
            key = cv2.waitKey(1)

            if key == 122:  # ESC key to break
                break

            temp_dimension = []
            if key == 32:
                # add dimension in temp_dimen
                temp_dimension.append(largest_object_height)
                temp_dimension.append(largest_object_width)
                final_list.append(temp_dimension)
                print(f"space pressed final_list: {final_list}")
                continue   

            if len(final_list) == 2 and len(final_list[-1]) == 2:
                max_value = max(final_list[-1])  # Find the max value in the last element of final_list
                final_list[-1].remove(max_value)
                final_list = list(itertools.chain.from_iterable(final_list))
            

        # Remove this max value from the last element (which is a list)
            if len(final_list) == 3:
                # TODO send client side thorugh websocket fastapi
                print(f"final_list: {final_list}")
                # await websocket.send_json({'dbox': final_list})
                draw_box(final_list[0],final_list[1],final_list[2])
                final_list = []

        cap.release()  
        cv2.destroyAllWindows()

if __name__ == "__main__":
    uvicorn.run("measure_object_size_camera:app", host="127.0.0.1", port=8000, log_level="info", reload=True)