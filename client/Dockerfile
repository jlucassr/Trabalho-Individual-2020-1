FROM node:14

WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH

COPY . .

RUN npm install
RUN npm install global @vue/cli@3.7.0

CMD ["npm", "run", "serve"]
