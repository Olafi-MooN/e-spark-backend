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
    // this.belongsToMany(models.Cars, { foreignKey: 'id_users', through: 'Users_cars', as: 'Usercars' })
    // this.belongsToMany(models.Users, { foreignKey: 'id_cars', through: 'Users_cars', as: 'Carsusers' })

  }
};

module.exports = Users_cars;