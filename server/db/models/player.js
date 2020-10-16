const Sequelize = require('sequelize')
const db = require('../db')

const Player = db.define('player', {
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  position: {
    type: Sequelize.STRING
  },
  num: {
    type: Sequelize.INTEGER
  }
})

module.exports = Player
