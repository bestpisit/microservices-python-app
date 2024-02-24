FROM python:3.10

# RUN apt-get update && apt-get install -y --no-install-recommends --no-install-suggests build-essential libpq-dev python3-dev && pip install --no-cache-dir --upgrade pip

WORKDIR /app
COPY ./requirements.txt /app

RUN pip install --no-cache-dir --requirement /app/requirements.txt
COPY . /app

EXPOSE 8080

ENV AUTH_SVC_ADDRESS="auth:5000"
ENV MONGODB_VIDEOS_URI="mongodb://ken:cosh@mongodb:27017/videos?authSource=admin"
ENV MONGODB_MP3S_URI="mongodb://ken:cosh@mongodb:27017/mp3s?authSource=admin"
ENV PLACEHOLDER=nothing

CMD ["python", "server.py"]