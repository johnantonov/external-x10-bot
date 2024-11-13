## build
docker compose build

## up
docker compose up external-x10Bot-redis -d
docker compose up external-x10Bot-postgres -d
docker compose up external-x10Bot-report-service -d
docker compose up external-x10Bot-app

## update 
docker compose down && docker compose build && docker compose up

