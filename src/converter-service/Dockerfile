FROM python:3.10

# work by /app
WORKDIR /app
# set up requirements.txt in /app
COPY ./requirements.txt /app
# install dependencies with no cache
RUN pip install --no-cache-dir --requirement /app/requirements.txt
# copy source code to the working dir
COPY . /app

CMD ["python", "consumer.py"]