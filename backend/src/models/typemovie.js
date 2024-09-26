"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TypeMovie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TypeMovie.init(
    {
      idMovie: DataTypes.STRING,
      idType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TypeMovie",
    }
  );
  return TypeMovie;
};
