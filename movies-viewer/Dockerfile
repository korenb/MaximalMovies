FROM node as builder

WORKDIR /app

COPY . .
RUN npm install && npm run build

FROM nginx:stable-alpine as server
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf