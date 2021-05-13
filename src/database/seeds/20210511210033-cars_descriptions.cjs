'use strict';

const dateCars = require('../../firebase/json/dateCars.json');

const cars_description = dateCars.map(item => {
  const { description, id_cars, title, url_img_description } = item.cars_description; 
  return { description, id_cars, title, url_img_description, createdAt: new Date(), updatedAt: new Date()};

});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cars_descriptions', cars_description, {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Cars_descriptions', null, {});
     
  }
};
