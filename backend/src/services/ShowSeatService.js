const { where } = require("sequelize");
const db = require("../models");

const getDetailShowSeat = (sid) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.ShowSeat.findAll({
        where: { idShow: sid },
        attributes: { exclude: ["createdAt", "updatedAt"] },
        order: [
          [{ model: db.CinemaSeat, as: "cinemaseats" }, "seatNumber", "ASC"],
        ],
        include: [
          {
            model: db.CinemaSeat,
            as: "cinemaseats",
            attributes: { exclude: ["createdAt", "updatedAt", "idCinemaHall"] },
          },
        ],
      });

      resolve({
        mes: response ? "OK" : "ERR",
        data: response || null,
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getDetailShowSeat,
};
