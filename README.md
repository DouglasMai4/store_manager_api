<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->

# StoreManager API

Projeto de uma pequena **API Rest** para gerenciar produtos e vendas de uma loja. Este é um projeto realizado durante meu curso Full-Stack na *Trybe*.

## Funcionalidades

### Produtos

#### GET

> `/products`: Lista todos os produtos registrados no banco de dados.  
> `/products/:id`: Lista um produto especifico de acordo com o seu ID.

#### POST

> `/products`: Adiciona um produto, necessario passar um objeto contendo o nome do produto: `{ "name": "Nome do produto" }`.

#### PUT

> `/products/:id`: Atualiza o nome do produto de acordo com o seu ID, necessario passar um objeto com o novo nome do produto: `{ "name": "Novo nome" }`.

#### DELETE

> `/products/:id`: Deleta um produto registrado de acordo com o seu ID.

### Vendas

### GET

> `/sales`: Lista todas as vendas registradas no banco de dados.  
> `/sales/:id`: Lista uma venda expecifica de acordo com o seu ID.

### POST

> `/sales`: Adiciona uma venda, necessario passar um array com os produtos e suas quantidades: `[{ productId: 1, quantity: 2 }]`.

## Desenvolvimento

Fui responsavel por criar as seguintes funcionalidades:

- Models
- Services
- Controllers
- Routes
- Middlewares
- Testes unitarios

O banco de dados e outros arquivos foram criados pela *Trybe*.
