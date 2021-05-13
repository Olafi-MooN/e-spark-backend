'use strict';

const dateCars = require('../../firebase/json/dateCars.json');

const cars_datasheets = dateCars.map(item => {
  const { acceleration, autonomy, brand, capacity, category, id_cars, maximum_speed, model, occupants, power, transmission } = item.cars_datasheets; 
  return { acceleration, autonomy, brand, capacity, category, id_cars, maximum_speed, model, occupants, power, transmission, createdAt: new Date(), updatedAt: new Date()};

});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cars_datasheets', cars_datasheets, {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Cars_datasheets', null, {});  
  }
};
