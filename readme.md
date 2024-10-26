# node with docker

- [tutorial](https://www.youtube.com/watch?v=9zUHg7xjIqQ)
> 39:28 / 5:21:59

## anotações:

#### configurações typescript:
`yarn add -D typescript node-dev ts-node && npx tsc --init`

#### criar imagem e rodar container do Dockerfile pela linha de comando:
`docker build -t node-app-custom-image . && docker run --env-file ./.env -v $(pwd):/app:ro -v /app/node_modules -p 3000:3000 -d --name node-app node-app-custom-image`

#### rodar docker composer em modo dev (maneira definitiva de rodar a aplicação em loalhost):
`docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build`