"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cinema.belongsTo(models.City, {
        foreignKey: "idCity",
        targetKey: "id",
        as: "cities",
      });
      Cinema.hasMany(models.CinemaHall, {
        foreignKey: "idCinema",
        as: "cinemahalls",
      });
    }
  }
  Cinema.init(
    {
      name: DataTypes.STRING,
      total: DataTypes.INTEGER,
      idCity: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cinema",
    }
  );
  return Cinema;
};
