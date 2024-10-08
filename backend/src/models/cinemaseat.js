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
      CinemaSeat.belongsTo(models.CinemaHall, {
        foreignKey: "idCinemaHall",
        targetKey: "id",
        as: "cinemahallseats",
      });
      CinemaSeat.hasMany(models.ShowSeat, {
        foreignKey: "idCinemaSeat",
        as: "cinemaseats",
      });
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
