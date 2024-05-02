const { db, Sequelize } = require('../db/config');

const Card = db.define('card', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  xp: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Card;
