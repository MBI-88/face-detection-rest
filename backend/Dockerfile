FROM python:3.11
WORKDIR /app
COPY requirements.txt /app
RUN apt-get update && apt-get install -y libopencv-dev python3-opencv
RUN pip install --upgrade pip && pip install -r /app/requirements.txt
EXPOSE 8080
COPY ./ /app
CMD ["python","manage.py", "runserver","-s","production"]