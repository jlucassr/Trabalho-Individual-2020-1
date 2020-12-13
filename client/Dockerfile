FROM node:14

WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH

COPY ./client .

RUN yarn global add @vue/cli@4.4.6
RUN yarn install