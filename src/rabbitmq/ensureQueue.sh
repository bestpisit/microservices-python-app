#!/bin/bash

# Check if rabbitMQ ready
if ! rabbitmq-diagnostics -q ping; then
    exit 1
fi

# Check queue mp3
if ! rabbitmqctl list_queues name | grep -q "mp3"; then
    exit 1
fi

# Check queue video
if ! rabbitmqctl list_queues name | grep -q "video"; then
    exit 1
fi

#Wow nice
exit 0