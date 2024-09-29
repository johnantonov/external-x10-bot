## up
docker-compose up external-x10Bot-redis -d
docker-compose up external-x10Bot-postgres -d
docker-compose up external-x10Bot-report-service -d

docker-compose up external-x10Bot-app

## update 
docker-compose down external-x10Bot-app (Ctrl+C)
docker-compose build external-x10Bot-app
docker-compose up external-x10Bot-app