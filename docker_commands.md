### docker cli

##### ver imagens 
`docker image ls`

##### ver containers:
`docker ps`


##### ver todos os containers:
`docker ps -a`

##### deletar imagem:
`docker image rm <id_image>`

##### parar e deletar container:
`docker rm <name_container> -f`

##### parar e deletar container e volume:
`docker rm <name_container> -fv`

##### build da imagem:
`docker build .-t <name_image> .`

##### rodar shell dentro do container:
`docker exec -it <name_container> <shell>`

##### ex. rodar shell dentro do container em um banco:
`docker exec -it <container> <shell_db> -u "<user>" -p "<pass>"`

#### ver volumes:
`docker volume ls`

#### deletar volumes não usados:
`docker volume prune`

##### rodar container a partir da sua imagem:
`docker run -d --env <name_env>=<value_env> --env-file <path_local_env> -v <path_project>:<path_container_project>:ro -p <port_outside>:<port_intern> --name <name_container> <name_image>`
> - `-d` -> rodar em background;
> - `-v` -> volume para a aplicação ficar armazenada na maquina host e as mudanças do código serem refletidas em tempo real, opção **:ro** significa readonly para o container não faça mudanças nos arquivos do projeto na maquina host, por questão de segurança (no caso do node_modules ou alguma outra pasta que guarda as bibliotecas deve ser criado um novo volume própio para esta pasta para que o projeto armazenado na máquina local não precise instalar as libs ou caso não tenha a pasta atrapalhe o projeto copiado para o container)
> - `-p` -> porta que ficará exposta a aplicação
> - `--name` -> nome do container
> - `--env` -> passar váriaveis de ambiente
> - `--env-file` -> passar caminho para o arquivo env local

### docker compose

##### opções docker compose up:
`docker compose up --help`

##### rodar docker compose:
`docker compose up`

##### rodar docker compose em background:
`docker compose up -d`

##### rodar docker compose em background e buildar imagem antes do container:
`docker compose up -d --build`

##### parar docker compose:
`docker compose stop`

##### parar e remover docker compose:
`docker compose down`

##### parar e remover docker compose e deletar volumes desnecessários:
`docker compose down -v`

##### rodar docker compose em background selecionando o ambiente:
`docker compose -f docker-compose.yml -f docker-compose.<env_mode>.yml up -d`

##### ver detalhes sobre o container:
`docker inspect <container>`

##### ver logs do container:
`docker logs <container>`

##### ver logs do container e ver novos logs automaticamente:
`docker logs <container> -f`
