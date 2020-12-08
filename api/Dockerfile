FROM ruby:2.5.7

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

RUN mkdir /code
WORKDIR /code

RUN gem update --system
RUN gem install bundler

RUN bundle install

RUN rake db:create
RUN rake db:migrate
COPY . /code

