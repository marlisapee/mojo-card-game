const { db, Sequelize } = require('../db/config');

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
