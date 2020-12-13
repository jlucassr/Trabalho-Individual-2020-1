# FROM node:14

# WORKDIR /client

# ENV PATH /client/node_modules/.bin:$PATH

# COPY . .

# RUN yarn global add @vue/cli:latest
# RUN yarn global add @vue/cli-service
# RUN yarn global add @vue/cli-plugin-babel
# RUN yarn global add @vue/cli-plugin-eslint
# RUN yarn install

# CMD ["yarn", "serve"]

FROM node:14
# instala um servidor http simples para servir conteúdo estático
RUN npm install -g http-server
WORKDIR /client
COPY ./client/package.json .
COPY ./client/yarn.lock .
# add /app/node_modules/.bin to $PATH
ENV PATH /client/node_modules/.bin:$PATH

RUN yarn global add @vue/cli@4.4.6
RUN yarn install
COPY . .
CMD ["npm", "run", "serve"]