# Build Stage
FROM node:alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV VITE_GATEWAY_API="http://localhost:8080"

RUN npm run build


# Deployment Stage
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
# Setup CORS Header
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

ENV VITE_GATEWAY_API="http://localhost:8080"

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]