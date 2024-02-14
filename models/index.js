const User = require('./User');
const Reservations = require('./Reservations');
const Available = require('./Available');



Reservations.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = { 
    User,
    Reservations,
    Available,
};
