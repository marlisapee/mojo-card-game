const { db, Sequelize } = require('../db/config');

const Card = db.define('card', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mojo: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  stamina: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Card;
