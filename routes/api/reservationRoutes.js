const router = require('express').Router();
const { Reservation } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.findAll();
    res.status(200).json(reservations);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const { user_id, reservation_time, party_size } = req.body;
    const newReservation = await Reservation.create({ user_id, reservation_time, party_size });
    res.status(201).json(newReservation);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;