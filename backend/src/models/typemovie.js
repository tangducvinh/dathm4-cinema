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
      TypeMovie.belongsTo(models.Movie, {
        foreignKey: "idMovie",
        targetKey: "id",
        as: "movietypes",
      });
      TypeMovie.belongsTo(models.Type, {
        foreignKey: "idType",
        targetKey: "id",
        as: "types",
      });
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
