from fastapi import WebSocket
from asyncio import Queue, QueueFull
import cv2
import numpy as np
from .serializers import DataInterface


# Intances

classifier = cv2.CascadeClassifier()


# Tools

async def recive_data(websocket: WebSocket, queue: Queue) -> None:
    data = await websocket.receive_bytes()
    try:
        queue.get_nowait(data)
    except QueueFull:
        pass


async def send_data(websocket: WebSocket, queue: Queue) -> None:
    while True:
        data = await queue.get()
        img = np.frombuffer(data, dtype=np.uint8)
        img = cv2.imdecode(img, 1)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        faces = classifier.detectMultiScale(img)
        if len(faces) > 0:
            faces_to_send = DataInterface(faces=faces.tolist())
        else:
            faces_to_send = DataInterface(faces=[])

        await websocket.send_bytes(faces_to_send)
