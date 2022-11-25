from fastapi import WebSocket
from asyncio import Queue, QueueFull
import cv2
import numpy as np
from .serializers import DataInterface


# Tools
age_labels = ['0-2', '4-6', '8-12', '15-20',
              '25-32', '38-43', '48-53', '60+']
gender_labels = ['male', 'female']
age_gender_blob_size = (256, 256)
face_blob_height = 300
face_average_color = (104, 117, 123)
face_confidence_threshold = 0.995


async def recive_data(websocket: WebSocket, queue: Queue) -> None:
    data = await websocket.receive_bytes()
    try:
        queue.get_nowait(data)
    except QueueFull:
        pass


async def send_data(
    websocket: WebSocket, queue: Queue, face_model: object,
    gender_model: object, age_model: object,
    age_gender_average_image: np.array
) -> None:
    list_data = []
    while True:
        data_to_send = {
            'area': [],
            'age': '',
            'age_conf': 0.0,
            'gender': '',
            'gender_conf': 0.0
        }
        data = await queue.get()
        img = np.frombuffer(data, dtype=np.uint8)
        img = cv2.imdecode(img, 1)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        h, w = img.shape
        aspect_ratio = w / h
        face_blob_width = int(face_blob_width * aspect_ratio)
        face_blob_size = (face_blob_width, face_blob_height)
        face_blob = cv2.dnn.blobFromImage(
            img, size=face_blob_size, mean=face_average_color)
        face_model.setInput(face_blob)
        face_result = face_model.forward()

        if len(face_result) > 0:
            for face in face_result[0, 0]:
                face_confidence = face[2]
                if face_confidence > face_confidence_threshold:
                    x0, y0, x1, y1 = (face[3:7] * [w, h, w, h]).astype(int)
                    y1_roi = y0 + int(1.2 * (y1 - y0))
                    x_margin = ((y1_roi - y0) - (x1 - x0)) // 2
                    x0_roi = x0 - x_margin
                    x1_roi = x1 + x_margin

                    if x0_roi < 0 or x1_roi > w or y0 < 0 or y1_roi > h:
                        continue

                    age_gender_roi = img[y0:y1_roi, x0_roi:x1_roi]
                    scaled_age_gender_roi = cv2.resize(
                        age_gender_roi, age_gender_blob_size, interpolation=cv2.INTER_LINEAR).astype(np.float32)
                    scaled_age_gender_roi[:] -= age_gender_average_image

                    age_gender_blob = cv2.dnn.blobFromImage(
                        scaled_age_gender_roi, size=age_gender_blob_size)
                    age_model.setInput(age_gender_blob)
                    age_results = age_model.forward()
                    age_id = np.argmax(age_results)
                    age_label = age_labels[age_id]
                    age_confidence = age_results[0, age_id]

                    gender_model.setInput(age_gender_blob)
                    gender_results = gender_model.forward()
                    gender_id = np.argmax(gender_results)
                    gender_label = gender_labels[gender_id]
                    gender_confidence = gender_results[0, gender_id]

                    data_to_send['area'] = (x0, y0, x1, y1)
                    data_to_send['age'] = age_label
                    data_to_send['age_conf'] = age_confidence
                    data_to_send['gender'] = gender_label
                    data_to_send['gender_conf'] = gender_confidence
                    list_data.append(data_to_send)

            data_face = DataInterface(faces=list_data)
        else:
            data_face = DataInterface(faces=[])

        await websocket.send_json(data_face.dict())
