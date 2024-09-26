"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CinemaHall extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CinemaHall.init(
    {
      name: DataTypes.STRING,
      idCinema: DataTypes.STRING,
      col: DataTypes.INTEGER,
      row: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CinemaHall",
    }
  );
  return CinemaHall;
};
