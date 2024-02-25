FROM rabbitmq:3-management

#identify the processID file location for rabbitMQ to write its processID to work with OS
ENV RABBITMQ_PID_FILE=/var/lib/rabbitmq/mnesia/rabbitmq

COPY ./init.sh /usr/init.sh
# fix bad interpreter by window
RUN sed -i 's/\r$//' /usr/init.sh && chmod +x /usr/init.sh

EXPOSE 15672 5672

CMD ["/usr/init.sh"]
