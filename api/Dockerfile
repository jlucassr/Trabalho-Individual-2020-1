FROM ruby:2.5.7

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

RUN mkdir /code
WORKDIR /code

COPY . .

RUN gem update --system
RUN gem install bundler -v 2.1.4 &&\
    bundle install

COPY . /code

COPY api/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000