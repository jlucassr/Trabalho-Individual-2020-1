#!/bin/bash
set -e

rm -f /code/tmp/pids/server.pid

rake db:drop
rake db:create
rake db:migrate

exec "$@"