# GraphMongoNode

## Introdução:

Bem-vindo à aplicação GraphMongoNode! Esta é uma aplicação que demonstra como criar um backend Node.js usando o MongoDB como banco de dados e o GraphQL para consultar e manipular dados em uma coleção de jogos.

## Como utilizar a aplicação:
- Instalação das dependências:
    - Antes de começar, certifique-se de ter o Node.js e o MongoDB instalados em seu sistema.
    - Em seguida, vá para a pasta do projeto e execute o seguinte comando para instalar as dependências listadas no arquivo package.json:
        ```
        npm install
        ```

- Configuração do banco de dados:
    - Esta aplicação está configurada para se conectar ao MongoDB localmente em mongodb://localhost:27017/gamesdb.
    - Certifique-se de ter o MongoDB em execução e pronto para aceitar conexões na porta padrão.

- Operações de CRUD usando o GraphQL Playground:

    - Após a instalação das dependências e a configuração do banco de dados, você pode iniciar o servidor usando o seguinte comando:
        ```
        npm run dev
        ```
    - Caso você não tenha instalado o nodemon pode utilizar o comando:
        ```
        node server.js
        ```
        dentro do respectivo diretório, ou pode instalar o nodemon da seguinte forma:
        ```
        npm install nodemon --save-dev
        ```

- Isso iniciará o servidor na porta especificada no arquivo server.js ou na porta 3232 se não estiver definida em PORT.env. Agora você pode acessar o GraphQL Playground em http://localhost:3232/graphql (ou na porta que você especificou) para realizar as operações de CRUD.

## Criando um novo jogo:

Para `criar` um novo jogo, use a seguinte mutação no GraphQL Playground:

  ```javascript
  mutation {
    createGame(title: "Nome do Jogo", genre: "Gênero do Jogo", releaseYear: 2023) {
      id
      title
      genre
      releaseYear
    }
  }
  ```

## Obtendo informações sobre um jogo específico ou todos os jogos:

Para `ler` obtendo informações sobre um jogo específico, use a seguinte consulta no GraphQL Playground:

  ```javascript
  query {
    game(id: "ID_DO_JOGO") {
      id
      title
      genre
      releaseYear
    }
  }
  ```
## Para obter informações sobre todos os jogos na coleção, use a seguinte consulta:

Para `ler` obtendo informações sobre todos os jogos, use a seguinte consulta no GraphQL:

```javascript
query {
  games {
    id
    title
    genre
    releaseYear
  }
}
```

## Atualizando informações de um jogo:

Para `atualizar` informações de um jogo existente, use a seguinte mutação no GraphQL Playground:

```javascript
mutation {
  updateGame(id: "ID_DO_JOGO", title: "Novo Nome do Jogo", genre: "Novo Gênero do Jogo", releaseYear: 2024) {
    id
    title
    genre
    releaseYear
  }
}
```

## Excluindo um jogo:
Para excluir um jogo, use a seguinte mutação no GraphQL Playground:
```javascript
mutation {
  deleteGame(id: "ID_DO_JOGO") {
    id
    title
    genre
    releaseYear
  }
}
```

* Lembre-se de substituir "ID_DO_JOGO" pelos IDs reais dos jogos que você deseja consultar, atualizar ou excluir.

## Testes:

Caso você queira inserir dados para simular jogos, você pode usar o seguinte comando:

```
npm run generate-data
```

O comando acima está configurado para gerar 10 jogos fictícios e inseri-los no banco de dados MongoDB. Isso permitirá que você teste as funções de consulta e manipulação dos dados usando o GraphQL Playground.

Caso você queira mudar o número de jogos para testar, é possível fazer isso na variável:

```javascript
const totalGames = 10 // Número total de jogos a serem criados
```

Dentro de `test/generateData.js`.

## Conclusão

Espero que este projeto possa auxília-los e seja útil para ajudá-los a criar projetos relacionados a backend com Node.js, MongoDB e GraphQL. Com o exemplo fornecido, você tem uma base sólida para desenvolver suas próprias aplicações e expandir seus conhecimentos.

A combinação do Node.js como ambiente de execução, o MongoDB como banco de dados NoSQL altamente flexível e o GraphQL como linguagem de consulta poderosa pode tornar suas aplicações mais eficientes e fáceis de manter.

Lembre-se de que o exemplo fornecido é apenas uma implementação básica e que você pode adaptá-la de acordo com as necessidades específicas do seu projeto. Adicionar autenticação, autorização, validações de entrada e outras funcionalidades é essencial para tornar sua aplicação mais segura e robusta.

Se você deseja contribuir com o projeto, fique à vontade para fazê-lo! A comunidade open-source é um excelente ambiente para compartilhar conhecimentos e melhorar conjuntamente as soluções disponíveis.