const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Available extends Model { }

const availableData = [
    {
        available_times: 0,
    },
];

const seedAvailable = () => Available.bulkCreate(availableData);

module.exports = seedAvailable;