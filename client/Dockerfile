FROM node:14

WORKDIR /code

ENV PATH /client/node_modules/.bin:$PATH

COPY . .

RUN yarn add @vue/cli@3.7.0 -g

RUN yarn install

CMD ["yarn", "serve"]