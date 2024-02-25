FROM mongo:4.0.8

# add the user
COPY ensure-users.js /docker-entrypoint-initdb.d/

COPY init-mongo.sh /usr/local/bin/init-mongo.sh
ENTRYPOINT ["/usr/local/bin/init-mongo.sh"]

EXPOSE 27017