FROM node:14

WORKDIR /client

COPY ./client/package.json .
COPY ./client/yarn.lock .

ENV PATH /client/node_modules/.bin:$PATH

RUN yarn global add @vue/cli@4.4.6
RUN yarn install

COPY . .

CMD ["npm", "run", "serve"]
