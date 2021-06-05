'use strict';
const { Model, DataTypes } = require('sequelize');

class Users_cars extends Model {

  static init(sequelize) {
    super.init({
      id_users: DataTypes.INTEGER,
      id_cars: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Cars, {foreignKey: 'id_cars', as: 'Users_car'});

  }
};

module.exports = Users_cars;