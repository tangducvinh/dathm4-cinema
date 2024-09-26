"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ActorMovie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ActorMovie.init(
    {
      idMovie: DataTypes.STRING,
      idActor: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ActorMovie",
    }
  );
  return ActorMovie;
};
