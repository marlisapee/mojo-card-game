const { db, Sequelize } = require('../db/config');

const Deck = db.define('deck', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mojo: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  stamina: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Deck;
