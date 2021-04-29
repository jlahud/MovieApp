FROM node:alpine 

WORKDIR /app

COPY . .

RUN npm upgrade -g npm && npm install

EXPOSE 3000

CMD npm start
