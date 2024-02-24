FROM python:3.10

WORKDIR /app
COPY ./requirements.txt /app

RUN pip install --no-cache-dir --requirement /app/requirements.txt
COPY . /app

EXPOSE 8080

ENV AUTH_SVC_ADDRESS="auth:5000"
ENV MONGODB_VIDEOS_URI="mongodb://ken:cosh@mongodb:27017/videos?authSource=admin"
ENV MONGODB_MP3S_URI="mongodb://ken:cosh@mongodb:27017/mp3s?authSource=admin"

CMD ["python", "server.py"]