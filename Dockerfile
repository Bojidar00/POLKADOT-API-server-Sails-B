# syntax=docker/dockerfile:1

FROM node:14.0.0

COPY ["package.json", "package-lock.json*", "./"]

WORKDIR /POLKADOT-API-server-Sails-B

COPY . .

RUN npm install

CMD [ "sails", "lift" ]