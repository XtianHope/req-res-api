const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Available extends Model { }

Available.init(
    {
        available_times: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'available',
    }
);

module.exports = Available;
