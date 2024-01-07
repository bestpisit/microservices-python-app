FROM python:3.10-slim-bullseye

RUN apt-get update && apt-get install -y --no-install-recommends --no-install-suggests build-essential libpq-dev python3-dev ffmpeg && pip install --no-cache-dir --upgrade pip

WORKDIR /app
COPY ./requirements.txt /app

RUN pip install --no-cache-dir --requirement /app/requirements.txt
COPY . /app

ENV MP3_QUEUE="mp3"
ENV VIDEO_QUEUE="video"
ENV MONGODB_URI="mongodb://ken:cosh@mongodb:27017/mp3s?authSource=admin" 

ENV PLACEHOLDER="NONE"

CMD ["python", "consumer.py"]