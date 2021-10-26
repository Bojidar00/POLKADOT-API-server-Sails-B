# syntax=docker/dockerfile:1

FROM node:14.0.0

ENV NODE_ENV=production

COPY ["package.json", "package-lock.json*", "./"]

WORKDIR /POLKADOT-API-server-Sails-B

COPY . .

RUN npm install

RUN npm install sails -g

CMD [ "sails", "lift" ]