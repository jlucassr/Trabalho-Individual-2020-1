FROM node:14

WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH

COPY . .

RUN yarn global add @vue/cli
RUN yarn global add @vue/cli-service
RUN yarn global add @vue/cli-plugin-babel
RUN yarn install

CMD ["yarn", "serve"]