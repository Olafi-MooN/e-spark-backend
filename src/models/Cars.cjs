const{ Model, DataTypes } = require('sequelize');

class Cars extends Model {

  static init(sequelize) {
    super.init({
      name_car: DataTypes.STRING,
      quantity_in_stock: DataTypes.INTEGER,
      url_img_car: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasOne(models.Cars_description, { foreignKey: 'id_cars', as: 'Cars_description' });
    this.hasOne(models.Cars_datasheet, { foreignKey: 'id_cars', as: 'Cars_datasheet' });
  }
}

module.exports = Cars;