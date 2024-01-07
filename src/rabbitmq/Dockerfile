FROM rabbitmq:3-management

ENV PLACEHOLDER="NONE"

ENV RABBITMQ_USER=admin
ENV RABBITMQ_PASSWORD=password
ENV RABBITMQ_PID_FILE=/var/lib/rabbitmq/mnesia/rabbitmq

COPY ./init.sh /init.sh
RUN chmod +x /init.sh

EXPOSE 15672 5672

CMD ["/init.sh"]