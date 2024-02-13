const { Reservation } = require('../models');

const reservationData = [
    {
        id: 1,
        timestamp: 1,
        user_id: 1,
    },
];

const seedReservations = () => Reservation.bulkCreate(reservationData);

module.exports = seedReservations;