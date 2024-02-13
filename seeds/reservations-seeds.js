const { Reservation } = require('../models');

const reservationData = [
    {
        id: 0,
        timestamp: 0,
        user_id: 0,
    },
];

const seedReservations = () => Reservation.bulkCreate(reservationData);

module.exports = seedReservations;