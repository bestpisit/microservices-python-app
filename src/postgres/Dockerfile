FROM postgres

ENV POSTGRES_USER=ken
ENV POSTGRES_PASSWORD=cosh
ENV POSTGRES_DB=authdb
ENV POSTGRES_HOST_AUTH_METHOD=trust

# copy the initilized sql for user account
COPY init.sql /docker-entrypoint-initdb.d/