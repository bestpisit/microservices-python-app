FROM python:3.10

# work by /app
WORKDIR /app
# set up requirements.txt in /app
COPY ./requirements.txt /app
# install dependencies with no cache
RUN pip install --no-cache-dir --requirement /app/requirements.txt
# copy source code to the working dir
COPY . /app


ENV MP3_QUEUE="mp3"
ENV VIDEO_QUEUE="video"
ENV MONGODB_URI="mongodb://ken:cosh@mongodb:27017/mp3s?authSource=admin" 

CMD ["python", "consumer.py"]