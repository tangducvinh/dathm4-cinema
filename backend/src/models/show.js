"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Show.init(
    {
      date: DataTypes.DATETIME,
      timeStart: DataTypes.DATETIME,
      timeEnd: DataTypes.DATETIME,
      idMovie: DataTypes.STRING,
      idCinemaHall: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Show",
    }
  );
  return Show;
};
