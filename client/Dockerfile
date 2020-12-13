FROM node:14

WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH

COPY . .

RUN yarn global add @vue/cli@4.4.6
RUN yarn install

CMD ["yarn", "serve"]
