"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CinemaSeat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CinemaSeat.init(
    {
      seatNumber: DataTypes.STRING,
      type: DataTypes.STRING,
      idCinemaHall: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CinemaSeat",
    }
  );
  return CinemaSeat;
};
