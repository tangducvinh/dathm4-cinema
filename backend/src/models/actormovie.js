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
      ActorMovie.belongsTo(models.Movie, {
        foreignKey: "idMovie",
        targetKey: "id",
        as: "movieactors",
      });
      ActorMovie.belongsTo(models.Actor, {
        foreignKey: "idActor",
        targetKey: "id",
        as: "actors",
      });
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
