const express = require('express');
const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

// Route to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error'});
  }
});


router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
  
      if (!user || !user.checkPassword(password)) {
        res.status(400).json({ message: 'Incorrect email or password' });
        return;
      }

      req.session.save(() => {
        req.session.user_id = user.id;
        req.session.loggedIn = true;
        res.status(200).json({ user: user.name, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/logout', (req, res) => {
        if (req.session.loggedIn) {
          req.session.destroy(() => {
            res.status(204).end();
          });
        } else {
          res.status(404).end();
        }
      });

module.exports = router;
