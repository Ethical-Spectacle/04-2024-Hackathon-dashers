'''
-----------------------------------------------------------------------
File: api.py
Creation Time: Apr 7th 2024, 3:12 am
Author: Saurabh Zinjad
Developer Email: saurabhzinjad@gmail.com
Copyright (c) 2023-2024 Saurabh Zinjad. All rights reserved | https://github.com/Ztrimus
-----------------------------------------------------------------------
'''

from fastapi import FastAPI, WebSocket
from fastapi.responses import HTMLResponse
import cv2
import base64
from aiortc.contrib.media import MediaPlayer

app = FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    cap = cv2.VideoCapture(0)  # Use the default camera

    while True:
        ret, frame = cap.read()
        if not ret:
            print("Failed to grab frame")
            break
        ret, buffer = cv2.imencode('.jpg', frame)
        frame_base64 = base64.b64encode(buffer).decode('utf-8')
        await websocket.send_text(frame_base64)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
