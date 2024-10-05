const db = require("../models");

const getListSeat = (roomId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.CinemaSeat.findAll({
        where: {
          idCinemaHall: roomId,
        },
        order: ['seatNumber']
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
  getListSeat,
};
