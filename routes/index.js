const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reservationRoutes = require('./reservationRoutes');

const apiRoutes = require('./api');
const viewRoutes = require('./viewRoutes');

router.use('/users', userRoutes);
router.use('/reservation', reservationRoutes);

module.exports = router;
