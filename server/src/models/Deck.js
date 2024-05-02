const { db, Sequelize } = require('../db/config');

const Deck = db.define('deck', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  xp: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});

module.exports = Deck;
