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

app = FastAPI()

html = """
<!DOCTYPE html>
<html>
    <head>
        <title>Chat</title>
    </head>
    <body>
        <h1>WebSocket Chat</h1>
        <form action="" onsubmit="sendMessage(event)">
            <input type="text" id="messageText" autocomplete="off"/>
            <button>Send</button>
        </form>
        <ul id='messages'>
        </ul>
        <script>
            var ws = new WebSocket("ws://localhost:8000/ws");
            ws.onmessage = function(event) {
                var messages = document.getElementById('messages')
                var message = document.createElement('li')
                var content = document.createTextNode(event.data)
                message.appendChild(content)
                messages.appendChild(message)
            };
            function sendMessage(event) {
                var input = document.getElementById("messageText")
                ws.send(input.value)
                input.value = ''
                event.preventDefault()
            }
        </script>
    </body>
</html>
"""


@app.get("/")
async def get():
    return HTMLResponse(html)


@app.websocket("/ws/get_box")
async def websocket_endpoint(websocket: WebSocket, dbox: list):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_json({'data': dbox})

# from fastapi import FastAPI, WebSocket
# from fastapi.responses import HTMLResponse
# import cv2
# import base64
# from aiortc.contrib.media import MediaPlayer

# app = FastAPI()

# @app.websocket("/ws")
# async def websocket_endpoint(websocket: WebSocket):
#     await websocket.accept()
#     while True:
#         data = await websocket.receive_text()
#         await websocket.send_text(f"Message text was: {data}")

# # @app.websocket("/ws")
# # async def websocket_endpoint(websocket: WebSocket):
# #     await websocket.accept()
# #     # await websocket.send_text("Hello from Saurabh Zinjad!")
# #     cap = cv2.VideoCapture(0)  # Use the default camera

# #     while True:
# #         ret, frame = cap.read()
# #         if not ret:
# #             print("Failed to grab frame")
# #             break
# #         ret, buffer = cv2.imencode('.jpg', frame)
# #         frame_base64 = base64.b64encode(buffer).decode('utf-8')
# #         await websocket.send_text(frame_base64)
        


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
