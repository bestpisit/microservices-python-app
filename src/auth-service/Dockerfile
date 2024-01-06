FROM python:3.10-slim-bullseye

RUN apt-get update && apt-get install -y --no-install-recommends --no-install-suggests build-essential libpq-dev python3-dev && pip install --no-cache-dir --upgrade pip

WORKDIR /app
COPY ./requirements.txt /app

RUN pip install --no-cache-dir --requirement /app/requirements.txt
COPY . /app

# this is the config
# ENV DATABASE_HOST=postgres
# ENV DATABASE_NAME=authdb
# ENV DATABASE_USER=ken
# ENV AUTH_TABLE=auth_user

# this is the secret keep it secure
ENV PSQL_PASSWORD=cosh
ENV JWT_SECRET=isnerock

EXPOSE 5000

CMD ["python", "server.py"]