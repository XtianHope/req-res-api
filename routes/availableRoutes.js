const express = require('express');
const router = require('express').Router();
const Available = require('../models');

// Route to get available times
router.get('/available', async (req, res) => {
    try {
        const availableTimes = await Available.findAll();
        res.json(availableTimes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});