FROM node:18.2-alpine3.15 as frontend 
WORKDIR /app/frontend
COPY frontend/package.json .
COPY frontend/package-lock.json .
RUN npm install --production
COPY frontend/ .
RUN npm run build

FROM python:3.11 as backend
WORKDIR /app/backend
COPY backend/requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt
COPY backend/ .


FROM python:3.11
WORKDIR /app
COPY --from=frontend /app/frontend/build /app/frontend
COPY --from=backend /app/backend /app/backend
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g serve
RUN apt-get update && apt-get install -y libopencv-dev python3-opencv
RUN pip install --upgrade pip && pip install --no-cache -r backend/requirements.txt


EXPOSE 80 8000

CMD ["sh","-c","cd backend && nohup python manage.py runserver -s production & cd frontend && serve -l 80"]