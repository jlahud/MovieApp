## Build Stage

FROM node:alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install --production --silent

COPY . .

ARG REACT_APP_API_PORT
ENV REACT_APP_API_PORT=${REACT_APP_API_PORT}

RUN npm run build

## Production Stage 

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
