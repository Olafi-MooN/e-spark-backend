'use strict';
const { Model, DataTypes } = require('sequelize');

class Users extends Model {

  static init(sequelize) {
    super.init({
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate(models) {
    /* this.belongsTo(models.Cars, { foreignKey: 'id_cars', as: 'Cars' }); */
  }
};

module.exports = Users;