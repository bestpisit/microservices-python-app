FROM postgres

# copy the initilized sql query for user account
COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432