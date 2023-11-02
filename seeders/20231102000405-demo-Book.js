'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Books', [
      {
        judul: 'Funicula Funiculi',
        penerbit: 'Gramedia Pustaka Utama',
        deskripsi: 'Funiculi Funicula adalah buku pertama dari serial Before The Coffee Gets Cold karya Toshikazu Kawaguchi. Berlatarkan Kafe tua kecil di Tokyo, seri pertama buku ini menawarkan kisah-kisah yang menghangatkan hati dari tokoh-tokoh di dalam buku.',
        gambar: "9786020651927_Funiculi_Funicula_cov.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    }   
  ]);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Books', null, {});
  }
};
