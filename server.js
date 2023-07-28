const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const mongoose = require('mongoose')
const Game = require('./models/game')

const PORT = process.env.PORT || 3232 // Correção no uso da variável de ambiente

const app = express()

// Conectar ao banco de dados MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/gamesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conexão com o MongoDB estabelecida.')
})
.catch(err => {
  console.error('Erro ao conectar ao MongoDB:', err)
  process.exit(1)
})

// Definir o esquema GraphQL
const schema = buildSchema(`
  type Game {
    id: ID!
    title: String!
    genre: String!
    releaseYear: Int!
  }

  type Query {
    game(id: ID!): Game
    games: [Game]
  }

  type Mutation {
    createGame(title: String!, genre: String!, releaseYear: Int!): Game
    updateGame(id: ID!, title: String, genre: String, releaseYear: Int): Game
    deleteGame(id: ID!): Game
  }
`)

// Definir as resolvers para as operações GraphQL
const root = {
  game: ({ id }) => Game.findById(id),
  games: () => Game.find(),
  createGame: ({ title, genre, releaseYear }) => {
    const game = new Game({ title, genre, releaseYear })
    return game.save()
  },
  updateGame: ({ id, title, genre, releaseYear }) => {
    return Game.findByIdAndUpdate(id, { title, genre, releaseYear }, { new: true })
  },
  deleteGame: ({ id }) => {
    return Game.findByIdAndRemove(id)
  },
}

// Configurar rota GraphQL
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/graphql`)
})
