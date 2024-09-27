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
      Movie.hasMany(models.TypeMovie, {
        foreignKey: "idMovie",
        as: "movietypes",
      });
      Movie.hasMany(models.DirectorMovie, {
        foreignKey: "idMovie",
        as: "moviedirectors",
      });
      Movie.hasMany(models.ActorMovie, {
        foreignKey: "idMovie",
        as: "movieactors",
      });
      Movie.hasMany(models.Show, {
        foreignKey: "idMovie",
        as: "movieshows",
      });
    }
  }
  Movie.init(
    {
      idCategory: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      introducer: DataTypes.STRING,
      trailer: DataTypes.STRING,
      poster: DataTypes.STRING,
      backDrop: DataTypes.STRING,
      rating: DataTypes.STRING,
      releaseYear: DataTypes.DATE,
      time: DataTypes.STRING,
      country: DataTypes.STRING,
      old: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
