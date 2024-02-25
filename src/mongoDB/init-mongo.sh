#!/bin/bash
set -e
set -x
MONGO_ROOT_USERNAME=${MONGO_INITDB_ROOT_USERNAME:-"admin"}
MONGO_ROOT_PASSWORD=${MONGO_INITDB_ROOT_PASSWORD:-"password"}
MONGO_USERSTR=${MONGO_USERSTR:-"admin:readWrite:password"}

# Replace placeholders in ensure-users.js with actual environment variables
sed -i "s/<rootUser>/${MONGO_ROOT_USERNAME}/g" /docker-entrypoint-initdb.d/ensure-users.js
sed -i "s/<rootPass>/${MONGO_ROOT_PASSWORD}/g" /docker-entrypoint-initdb.d/ensure-users.js
sed -i "s/<userStr>/${MONGO_USERSTR}/g" /docker-entrypoint-initdb.d/ensure-users.js

# Now call the original Docker entrypoint script for MongoDB
exec docker-entrypoint.sh "${@:-mongod}"