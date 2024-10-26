##### ver imagens 
`docker image ls`

##### ver containers:
`docker ps`

##### deletar imagem:
`docker image rm <id_image>`

##### parar e deletar container:
`docker rm <name_container> -f`

##### build da imagem:
`docker build .-t <name_image> .`

##### rodar container a partir da sua imagem:
`docker run -d -p <port_outside>:<port_intern> --name <name_container> <name_image>`

##### rodar shell dentro do container:
`docker exec -it <name_container> bash`