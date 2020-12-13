# FROM node:14

# WORKDIR /client

# ENV PATH /client/node_modules/.bin:$PATH

# COPY ./client .

# RUN yarn global add @vue/cli@4.4.6
# RUN yarn install

FROM node:14

WORKDIR /client

COPY ./client/package.json .
COPY ./client/yarn.lock .

RUN yarn global add @vue/cli@4.4.6
RUN yarn install

COPY ./client/ /client

COPY ./client/entrypoint.sh /usr/bin/entrypoint_client.sh
RUN chmod +x /usr/bin/entrypoint_client.sh

ENTRYPOINT ["entrypoint_client.sh"]