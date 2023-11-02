'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
      nama: 'Udin',
      alamat: 'Laut segitiga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'Dodi',
      alamat: 'Gua hiro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'Bayu',
      alamat: 'Saranjana',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'Ijong',
      alamat: 'Atlantis',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
