# Fundamentos do Node

Este repositório faz parte de um desafio proposto pela plataforma da rocketseat, consiste em uma API REST construida inteiramente com NodeJS, sem o uso de qualquer framework ou microframework, com banco de dados em arquivo JSON. O usuário pode cadastrar, editar e listar tarefas e cada tarefa possui um titulo e uma descrição.

Também foi implementada uma funcionalidade de importar um arquivo CSV para inserções em massa, através da biblioteca csv-parse.

## ✨ Funcionalidades

- CRUD de Tarefas
- Atualização do status de uma tarefa
- Importação via arquivo CSV
- Validação de dados
- Pesquisa por query parameters

## 🚀 Rodando o Projeto

1. Clone o repositório:

  ```bash
  git clone https://github.com/Dutrak/desafio-node-fundamentos.git
  ```

2. Instale as dependências:

  ```bash
  npm install
  ```

3. Inicie o servidor de desenvolvimento:

  ```bash
  npm run dev
  ```

4. Para importar do CSV, utilize o comando:

  ```bash
  npm run csv
  ```

## 🖥️ Tecnologias Utilizadas
- Javascript
- NodeJS
- csv-parse


## ©️ License

[MIT](https://choosealicense.com/licenses/mit/)
