FROM node:20

# inicio dos diretórios padrão
WORKDIR /app

# copiar package.json e lock para o container
COPY package.json .

# variáveis de desenvolvimento
ENV PORT=3000

# variável usada no processo de build da imagem
ARG NODE_ENV


# instalar as libs para o container
# exemplo de comando específico para cada ambiente
RUN if [ "$NODE_ENV" = "development" ]; \
    echo "teste"; \
    rm -rf node_modules; \
    then npm i -G yarn && yarn; \
    else npm i -G yarn && yarn install --production=true; \
    fi

# copiar todos os arquivos para dentro do container
COPY . ./

# funciona como documentação, não expõem realmente a porta
EXPOSE $PORT

# comando para rodar a aplicação
CMD ["yarn", "dev"]