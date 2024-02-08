const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const reservationRoutes = require('./api/reservationRoutes');

const apiRoutes = require('./api');
const viewRoutes = require('./viewRoutes');

router.use('/users', userRoutes);
router.use('/reservation', reservationRoutes);
router.use('/api', apiRoutes);
router.use('/', viewRoutes);


module.exports = router;
