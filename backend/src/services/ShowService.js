const { where } = require("sequelize");
const db = require("../models");

const getAllShow = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Show.findAll({
        where: {
          idMovie: "7c440aee-6cf7-4f1d-8e60-cb5a72c4dc6b",
        },
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: [
          {
            model: db.CinemaHall,
            as: "cinemahallshows",
            attributes: { exclude: ["createdAt", "updatedAt"] },
            include: [
              {
                model: db.Cinema,
                as: "cinemahalls",
                attributes: { exclude: ["createdAt", "updatedAt"] },
                where: {
                  id: "1",
                },
                include: [
                  {
                    model: db.City,
                    as: "cities",
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                  },
                ],
              },
            ],
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

const getDetailShow = (sid) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("sid ", sid);
      const response = await db.Show.findOne({
        where: { id: sid },
        attributes: { exclude: ["idCinemaHall", "createdAt", "updatedAt"] },
        include: [
          {
            model: db.CinemaHall,
            as: "cinemahallshows",
            attributes: { exclude: ["createdAt", "updatedAt"] },
            include: [
              {
                model: db.Cinema,
                as: "cinemahalls",
                attributes: { exclude: ["createdAt", "updatedAt"] },
              },
            ],
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
  getAllShow,
  getDetailShow,
};
