# node with docker

- [tutorial](https://www.youtube.com/watch?v=9zUHg7xjIqQ)

## anotações:

#### configurações typescript:
`yarn add -D typescript node-dev ts-node && npx tsc --init`

#### rodando Dockerfile:
`docker build -t node-app-custom-image . && docker run -v $(pwd):/app -p 3000:3000 -d --name node-app node-app-custom-image`