#!/bin/bash
set -e

bundle install 

rm -f /code/tmp/pids/server.pid

rake db:create
rake db:migrate

exec "$@"
