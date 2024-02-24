FROM rabbitmq:3-management

ENV PLACEHOLDER="NONE"

ENV RABBITMQ_USER=admin
ENV RABBITMQ_PASSWORD=password
ENV RABBITMQ_PID_FILE=/var/lib/rabbitmq/mnesia/rabbitmq

COPY ./init.sh /usr/init.sh
RUN sed -i 's/\r$//' /usr/init.sh && chmod +x /usr/init.sh

EXPOSE 15672 5672

CMD ["/usr/init.sh"]
