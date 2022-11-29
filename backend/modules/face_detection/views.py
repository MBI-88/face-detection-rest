from fastapi import (APIRouter, WebSocket,
                     WebSocketDisconnect, Response,
                     Body, Depends, status)
from .socket_tools import recive_data, send_data, cv2, np
from asyncio import create_task, Queue


route = APIRouter()


# Routes
@route.websocket("/face-detection")
async def websocket(websocket: WebSocket) -> None:
    await websocket.accept()
    queue: Queue = Queue.get(maxsize=10)
    detect_faces = create_task(send_data(websocket, queue, face_model,age_model, gender_model, age_gender_image))
    try:
        while True:
            await recive_data(websocket, queue)
    except WebSocketDisconnect:
        detect_faces.cancel()
        await websocket.close()


@route.on_event('startup')
async def load_model() -> None:
    global face_model, age_model, gender_model, age_gender_image
    face_model = cv2.dnn.readNetFromCaffe('/var/www/html/face-detection-rest/backend/face_models/deploy.prototxt',
                                          '/var/www/html/face-detection-rest/backend/face_models/res10_300x300_ssd_iter_140000.caffemodel')
    age_model = cv2.dnn.readNetFromCaffe("/var/www/html/face-detection-rest/backend/face_models/age_net_deploy.prototxt",
                                         "/var/www/html/face-detection-rest/backend/face_models/age_net.caffemodel")
    gender_model = cv2.dnn.readNetFromCaffe("/var/www/html/face-detection-rest/backend/face_models/gender_net_deploy.prototxt",
                                            "/var/www/html/face-detection-rest/backend/face_models/gender_net.caffemodel")
    age_gender_image = np.load("/var/www/html/face-detection-rest/backend/face_models/average_face.npy")


@route.get('/hola')
async def get_hola() -> Response:
    return {"message":'Hola mundo'}

