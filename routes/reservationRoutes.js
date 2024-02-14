const express = require('express');
const router = require('express').Router();
const { Reservations } = require('../models');

// Route to create a new reservation
router.post('/reservations', async (req, res) => {
  try {
    const { timestamp } = req.body; 
    const newReservation = await Reservations.create({ timestamp });
    res.json(newReservation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;