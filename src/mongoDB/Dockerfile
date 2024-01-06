# Use the standard MongoDB image
FROM mongo:4.0.8

# Set environment variables (replace these values as needed)
ENV MONGO_INITDB_ROOT_USERNAME=nasi
ENV MONGO_INITDB_ROOT_PASSWORD=nasi1234

# Copy the custom configuration and scripts (if any) into the container
# Note: You need to have these files in your Docker context
COPY mongo.conf /etc/mongo/mongo.conf
# COPY init-mongo.sh /docker-entrypoint-initdb.d/
COPY ensure-users.js /docker-entrypoint-initdb.d/

# Expose the default MongoDB port
EXPOSE 27017