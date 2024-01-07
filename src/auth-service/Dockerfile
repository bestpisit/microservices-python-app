FROM python:3.10-slim-bullseye

RUN apt-get update && apt-get install -y --no-install-recommends --no-install-suggests build-essential libpq-dev python3-dev && pip install --no-cache-dir --upgrade pip

# work by /app
WORKDIR /app

# set up requirements.txt in /app
COPY ./requirements.txt /app
# install dependencies
RUN pip install --no-cache-dir --requirement /app/requirements.txt

# copy source code to the working dir
COPY . /app

ENV DATABASE_HOST=postgres
ENV DATABASE_NAME=authdb
ENV DATABASE_USER=ken
ENV AUTH_TABLE=auth_user

ENV PSQL_PASSWORD=cosh
ENV JWT_SECRET=bybuabest

EXPOSE 5000

CMD ["python", "server.py"]