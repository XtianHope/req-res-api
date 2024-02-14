const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) => {
  const userData = await User.findAll();
  const users = userData.map(o => o.get());
  const loggedIn = req.session.loggedIn;
  res.render('reservation');
});

router.get('/login', (req, res) => {
  res.render('login');
});

// router.get('/reservation', async (req, res) => {
//   const userData = await User.findAll();
//   const users = userData.map(o => o.get());
//   const loggedIn = req.session.loggedIn;

//   res.render('reservation', { fun: 'Hello', users, loggedIn });
// });


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
