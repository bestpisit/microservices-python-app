FROM python:3.10

WORKDIR /app
COPY ./requirements.txt /app

RUN pip install --no-cache-dir --requirement /app/requirements.txt
COPY . /app

ENV MP3_QUEUE="mp3"
ENV VIDEO_QUEUE="video"

ENV GMAIL_ADDRESS="bestentaneer@gmail.com" 
ENV GMAIL_PASSWORD="rabbitmq"

CMD ["python", "consumer.py"]