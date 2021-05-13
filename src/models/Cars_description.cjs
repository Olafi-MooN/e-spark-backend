'use strict';
const { Model, DataTypes } = require('sequelize');

class Cars_description extends Model {

  static init(sequelize) {
    super.init({
      description: DataTypes.STRING,
      title: DataTypes.STRING,
      url_img_description: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Cars, {foreignKey: 'id_cars', as: 'Cars'});
  }
};

module.exports = Cars_description;