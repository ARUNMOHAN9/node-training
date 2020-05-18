const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_train', 'root', 'admin', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;