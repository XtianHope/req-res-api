const sequelize = require('../config/connection');
const { User, Reservations } = require('../models');

const userData = require('./userData.json');

const reservationData = require('./reservations-seeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Reservations.bulkCreate(reservationData);

  process.exit(0);
};

seedDatabase();
