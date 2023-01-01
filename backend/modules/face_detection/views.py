from fastapi import (APIRouter, WebSocket,
                     WebSocketDisconnect, status)
from .socket_tools import recive_data, send_data, cv2, np
from asyncio import create_task, Queue


route = APIRouter()


# Routes
@route.websocket("/face-detection")
async def websocket(websocket: WebSocket) -> None:
    await websocket.accept()
    queue: Queue = Queue(maxsize=10)
    detect_faces = create_task(send_data(
        websocket, queue, face_model, age_model, gender_model, age_gender_average_image))
    try:
        while True:
            await recive_data(websocket, queue)
    except WebSocketDisconnect:
        detect_faces.cancel()
        await websocket.close()


@route.on_event('startup')
async def load_model() -> None:
    global face_model, age_model, gender_model, age_gender_average_image
    face_model = cv2.dnn.readNetFromCaffe('/app/face_models/deploy.prototxt',
                                          '/app/face_models/res10_300x300_ssd_iter_140000.caffemodel')
    age_model = cv2.dnn.readNetFromCaffe("/app/face_models/age_net_deploy.prototxt",
                                         "/app/face_models/age_net.caffemodel")
    gender_model = cv2.dnn.readNetFromCaffe("/app/face_models/gender_net_deploy.prototxt",
                                            "/app/face_models/gender_net.caffemodel")
    age_gender_average_image = np.load(
        "/app/face_models/average_face.npy")

