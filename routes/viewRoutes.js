const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  res.render('index');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard', { layout: null });
});

router.get('/reservation', async (req, res) => {
  const userData = await User.findAll();
  const users = userData.map(o => o.get());
  const loggedIn = req.session.loggedIn;

  res.render('reservation', { fun: 'Hello', users, loggedIn });
});


router.post('/logout', (req, res) => {
      if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).redirect('/');
        });
      } else {
        res.status(204).end();
      }
    });

module.exports = router;
