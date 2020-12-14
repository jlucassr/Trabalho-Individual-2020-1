# Trabalho Individual 2020-1

**Aluno**: João Lucas Sousa Reis

**Matrícula**: 160009758

![CI](https://github.com/jlucassr/Trabalho-Individual-2020-1/workflows/CI/badge.svg?branch=master)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=jlucassr_Trabalho-Individual-2020-1&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=jlucassr_Trabalho-Individual-2020-1)

# Solução

## Conteinerização

Para a primeira tarefa do trabalho foi feita a conteinerização do projeto utilizando Docker e docker-compose.
Com isso, foi criado o arquivo docker-compose.yml na raiz do projeto e cada Dockerfile se encontra na pasta do seu respectivo container: **client** e **api**.

Se utiliza também os volumes node_modules, api_gems e volume_db para armazenar o banco de dados e as bibliotecas usadas pelo Node JS e o Rails.
Foi criada também a **network_app**, uma network para facilitar as comunicações entre os containers e o banco de dados definido com **db** no docker-compose.

## Integração Contínua

Para a Integração contínua foi usado o Github Actions. Foi criado o workflow **CI** onde todas as configurações de build, testes e da ferramenta sonarcloud para a manutenibilidade e qualidade de cada execução de push ou pull request feitos para as branches estáveis do trabalho.

# Como executar

Para subir e buildar o projeto, basta rodar o comando abaixo:

```sh
docker-compose up --build
```

Para rodar os testes do trabalho dockerizado utilize os comandos:

- Frontend

```sh
docker-compose run client yarn run test:unit
```

- Backend

```sh
docker-compose run api bundle exec rails test
```
