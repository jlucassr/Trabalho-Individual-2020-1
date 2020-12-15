# Trabalho Individual 2020-1

**Aluno**: João Lucas Sousa Reis

**Matrícula**: 160009758

![CI](https://github.com/jlucassr/Trabalho-Individual-2020-1/workflows/CI/badge.svg?branch=master)
![Heroku](https://github.com/jlucassr/Trabalho-Individual-2020-1/workflows/Heroku/badge.svg?branch=master)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=jlucassr_Trabalho-Individual-2020-1&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=jlucassr_Trabalho-Individual-2020-1)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=jlucassr_Trabalho-Individual-2020-1&metric=alert_status)](https://sonarcloud.io/dashboard?id=jlucassr_Trabalho-Individual-2020-1)


# Solução

## Conteinerização

Para a primeira tarefa do trabalho foi feita a conteinerização do projeto utilizando Docker e docker-compose.
Com isso, foi criado o arquivo docker-compose.yml na raiz do projeto e cada Dockerfile se encontra na pasta do seu respectivo container: **client** e **api**.

Se utiliza também os volumes node_modules, api_gems e volume_db para armazenar o banco de dados e as bibliotecas usadas pelo Node JS e o Rails.
Foi criada também a **network_app**, uma network para facilitar as comunicações entre os containers e o banco de dados definido com **db** no docker-compose.

## Integração Contínua

Para a Integração contínua foi usado o Github Actions. Foi criado o workflow **CI** onde todas as configurações de build, testes e da ferramenta sonarcloud para a manutenibilidade e qualidade de cada execução de push ou pull request feitos para as branches estáveis do trabalho.

No arquivo ci.yml, foram criados os três *jobs*: 

- build: Para subir o ambiente dockerizado;
- tests: Para executar os testes do Frontend e do Backend;
- sonarcloud: Para verificação da qualidade e manutenibilidade do código do projeto.

## Deploy

Para o Deploy, foi necessário usar Heroku e o Vercel. O motivo foi que o Heroku apresentou alguns problemas de criar diferentes deploys para o mesmo repositório, então como o Vercel apresentava um suporte melhor para Node Js e Vue, foi optado por utilizar as duas ferramentas. O Heroku gerou o deploy do backend (API) enquanto o Vercel gerou do frontend (client).

**Links:**

Front: https://trabalho-individual-2020-1-git-master.jlucassr.vercel.app/#/

Back: http://api-joaolucas.herokuapp.com/api/v1/profiles

# Como executar

Para subir e buildar o projeto, basta rodar o comando abaixo:

```sh
docker-compose up --build
```

Após subir o projeto, as aplicações se encontram localmente em:

Front: http://localhost:8080/

Back: http://localhost:3000/

Para rodar os testes do trabalho dockerizado utilize os comandos:

- Frontend

```sh
docker-compose run client yarn run test:unit
```

- Backend

```sh
docker-compose run api bundle exec rails test
```
