"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DirectorMovie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DirectorMovie.init(
    {
      idMovie: DataTypes.STRING,
      idDirector: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "DirectorMovie",
    }
  );
  return DirectorMovie;
};
