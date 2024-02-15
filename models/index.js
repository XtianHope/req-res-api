const User = require('./User');
const Reservations = require('./Reservations');
const Available = require('./Available');

User.hasMany(Reservations, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

Reservations.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = { 
    User,
    Reservations,
    Available,
};
