FROM node:8

RUN mkdir -p /coding-challenge
WORKDIR /coding-challenge

COPY package.json /coding-challenge

RUN npm install

COPY . /coding-challenge
