const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Reservations extends Model { }

Reservations.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        timestamp: {
            type: DataTypes.timestamp,
            allowNull: false,
        },
        users_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'reservations',
    }
);

module.exports = Reservations;
