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
      Show.belongsTo(models.Movie, {
        foreignKey: "idMovie",
        targetKey: "id",
        as: "movieshows",
      });
      Show.belongsTo(models.CinemaHall, {
        foreignKey: "idCinemaHall",
        targetKey: "id",
        as: "cinemahallshows",
      });
    }
  }
  Show.init(
    {
      date: DataTypes.DATE,
      timeStart: DataTypes.DATE,
      timeEnd: DataTypes.DATE,
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
