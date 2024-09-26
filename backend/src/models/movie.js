"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init(
    {
      idCategory: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      introducer: DataTypes.STRING,
      poster: DataTypes.STRING,
      backDrop: DataTypes.STRING,
      idType: DataTypes.STRING,
      idActor: DataTypes.STRING,
      idDirector: DataTypes.STRING,
      rating: DataTypes.STRING,
      releaseYear: DataTypes.STRING,
      time: DataTypes.STRING,
      country: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
