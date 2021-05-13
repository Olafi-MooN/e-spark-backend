'use strict';
const { Model, DataTypes } = require('sequelize');

class Cars_datasheet extends Model {

  static init(sequelize) {
    super.init({
      brand: DataTypes.STRING,
      model: DataTypes.STRING,
      category: DataTypes.STRING,
      autonomy: DataTypes.STRING,
      maximum_speed: DataTypes.STRING,
      acceleration: DataTypes.STRING,
      power: DataTypes.STRING,
      transmission: DataTypes.STRING,
      occupants: DataTypes.INTEGER,
      capacity: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Cars, { foreignKey: 'id_cars', as: 'Cars' });
  }
};

module.exports = Cars_datasheet;