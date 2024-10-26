FROM node:20

# inicio dos diretórios padrão
WORKDIR /app

# copiar package.json e lock para o container
COPY package.json .
COPY yarn.lock .

# instalar as libs node para o container
RUN npm i -G yarn && yarn

# copiar todos os arquivos para dentro do container
COPY . ./

# funciona como documentação, não expõem realmente a porta
EXPOSE 3000

# comando para rodar a aplicação
CMD ["yarn", "dev"]