"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ShowSeat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ShowSeat.belongsTo(models.CinemaSeat, {
        foreignKey: "idCinemaSeat",
        targetKey: "id",
        as: "cinemaseats",
      });
    }
  }
  ShowSeat.init(
    {
      status: DataTypes.STRING,
      price: DataTypes.INTEGER,
      idBooking: DataTypes.STRING,
      idCinemaSeat: DataTypes.STRING,
      idShow: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ShowSeat",
    }
  );
  return ShowSeat;
};
