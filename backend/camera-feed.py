'''
-----------------------------------------------------------------------
File: camera-feed.py
Creation Time: Apr 6th 2024, 6:18 pm
Author: Saurabh Zinjad
Developer Email: saurabhzinjad@gmail.com
Copyright (c) 2023-2024 Saurabh Zinjad. All rights reserved | https://github.com/Ztrimus
-----------------------------------------------------------------------
'''

import cv2

cap = cv2.VideoCapture('http://192.168.210.114:8080/video')

while(cap.isOpened()):
    ret, frame = cap.read()
    try:
        cv2.imshow('temp', cv2.resize(frame, (600,400)))
        key = cv2.waitKey(1)
        if key == ord('q'):
            break
    except cv2.error:
        print("Stream ended...")
        break

cap.release()
cv2.destroyAllWindows()
