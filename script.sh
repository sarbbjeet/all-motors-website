#!/bin/bash
# djdss
echo "Waiting for mysql to get up and running..."
while ! nc -z mysql_db 3306; do
# while !docker exec mysql_db mysql --user=root --password=root -e "SELECT 1" >/dev/null 2>&1; do

# where the postgres_container is the hos, in my case, it is a Docker container.
# You can use localhost for example in case your database is running locally.
echo "waiting for mysql listening..."
sleep 0.1
done
sleep 20  
echo "Mysql started"
yarn prisma:migrate 
yarn start
