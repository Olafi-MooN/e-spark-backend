'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cars_datasheets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brand: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      autonomy: {
        type: Sequelize.STRING
      },
      maximum_speed: {
        type: Sequelize.STRING
      },
      acceleration: {
        type: Sequelize.STRING
      },
      power: {
        type: Sequelize.STRING
      },
      transmission: {
        type: Sequelize.STRING
      },
      occupants: {
        type: Sequelize.INTEGER
      },
      capacity: {
        type: Sequelize.STRING
      },
      id_cars: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Cars', key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cars_datasheets');
  }
};