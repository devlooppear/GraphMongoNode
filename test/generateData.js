const mongoose = require('mongoose');
const Game = require('../models/game');

const totalGames = 10 // Número total de jogos a serem criados
const genres = ['Action', 'Adventure', 'RPG', 'Simulation', 'Strategy'] // Lista de gêneros

const generateGameData = () => {
  const games = []
  for (let i = 0; i < totalGames; i++) {
    const game = {
      title: `Game ${i + 1}`,
      genre: genres[Math.floor(Math.random() * genres.length)],
      releaseYear: Math.floor(Math.random() * (2023 - 1989 + 1)) + 1989,
    };
    games.push(game)
  }
  return games
}

const insertData = async () => {
  try {
    await Game.deleteMany()
    const games = generateGameData()
    await Game.insertMany(games)
    console.log('Dados fictícios inseridos com sucesso no banco de dados.')
  } catch (error) {
    console.error('Erro ao inserir os dados fictícios:', error)
  } finally {
    mongoose.disconnect()
  }
}

mongoose.connect('mongodb://127.0.0.1:27017/gamesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida.')
    insertData()
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err)
    process.exit(1)
  })
