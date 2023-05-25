const Sequelize = require('sequelize');

const sequelize = require('../util/database');


const Candy = sequelize.define('candy', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:  {
        type: Sequelize.STRING,
        unique: true
    },
    desc: Sequelize.STRING,
    price: Sequelize.STRING,
    quantity: Sequelize.STRING
});

module.exports = Candy;
