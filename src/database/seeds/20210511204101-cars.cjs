'use strict';

const dateCars = require('../../firebase/json/dateCars.json');

const cars = dateCars.map(item => {
  const { name_car, quantity_in_stock, url_img_car } = item.cars; 
  return { name_car, quantity_in_stock, url_img_car, createdAt: new Date(), updatedAt: new Date()};

});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cars', cars, {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Cars', null, {});
     
  }
};
