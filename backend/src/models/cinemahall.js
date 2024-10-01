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
      CinemaHall.belongsTo(models.Cinema, {
        foreignKey: "idCinema",
        targetKey: "id",
        as: "cinemahalls",
      });
      CinemaHall.hasMany(models.CinemaSeat, {
        foreignKey: "idCinemaHall",
        as: "cinemahallseats",
      });
      CinemaHall.hasMany(models.Show, {
        foreignKey: "idCinemaHall",
        as: "cinemahallshows",
      });
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
