const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) => {
  const userData = await User.findByPk(req.session.user_id);
  const user = userData.get();
  const loggedIn = req.session.loggedIn;
  res.render('reservation', { user });
});

router.get('/login', (req, res) => {
  res.render('login');
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
