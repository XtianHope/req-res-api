const express = require('express');
const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

// Route to creeate new users
router.post('/', async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(user);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
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
        req.session.loggedIn = true;
        req.session.user_id = user.id;
        res.redirect('/');
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
