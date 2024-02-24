FROM python:3.10

# work by /app
WORKDIR /app

# set up requirements.txt in /app
COPY ./requirements.txt /app
# install dependencies with no cache
RUN pip install --no-cache-dir --requirement /app/requirements.txt
# copy source code to the working dir
COPY . /app

#postgres connection environment variable
ENV DATABASE_HOST=postgres
ENV DATABASE_NAME=authdb
ENV DATABASE_USER=ken
ENV AUTH_TABLE=auth_user
ENV PSQL_PASSWORD=cosh
ENV JWT_SECRET=bybuabest

EXPOSE 5000

CMD ["python", "server.py"]