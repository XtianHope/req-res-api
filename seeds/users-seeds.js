const { Users } =require('../models');

const usersData = [
    {
        users_id: 0,
        users_name: null,
        phone_number: 0,
    },
];

const seedUsers = () => Users.bulkCreated(usersData);

module.exports = seedUsers;