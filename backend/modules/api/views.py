from fastapi import (APIRouter, WebSocket,
                     WebSocketDisconnect, Response,
                     Body, Depends, status)
from .socket_tools import recive_data, send_data, classifier
from asyncio import create_task, Queue


api = APIRouter()


# Routes
@api.websocket("/face-detection")
async def websocket() -> Response:
    pass


@api.on_event('startup')
async def load_model() -> None:
    classifier.load()
