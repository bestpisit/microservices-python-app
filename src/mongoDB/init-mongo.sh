#!/bin/bash

# Read environment variables directly
rootUser="${MONGO_ROOT_USERNAME}"
rootPass="${MONGO_ROOT_PASSWORD}"
usersStr="${MONGO_USERS_LIST}"

# Pass the environment variables to the MongoDB script
mongo --eval "var rootUser='$rootUser'; var rootPass='$rootPass'; var usersStr='$usersStr';" /docker-entrypoint-initdb.d/ensure-users.js
