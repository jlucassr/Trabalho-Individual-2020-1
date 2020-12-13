FROM node:14

WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH

COPY . .

RUN yarn global add @vue/cli@4.4.6
RUN yarn install

CMD ["yarn", "serve"]

# FROM node:14

# COPY ./client/package.json .
# COPY ./client/yarn.lock .

# RUN yarn global add @vue/cli@4.4.6
# RUN yarn install

# COPY ./client/ .

# COPY ./client/entrypoint.sh /usr/bin/entrypoint_client.sh

# RUN chmod +x /usr/bin/entrypoint_client.sh

# ENTRYPOINT ["entrypoint_client.sh"]
