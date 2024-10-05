const { where } = require("sequelize");
const db = require("../models");

const getAllShow = (movieId, date, cinemaId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = {}
      if (movieId) query.idMovie = movieId
      if (date) query.date = `${date}T00:00:00.000Z`
      if (cinemaId) query['$cinemahallshows.cinemahalls.id$'] = cinemaId

      const response = await db.Show.findAll({
        // where: {
        //   idMovie: movieId,
        //   date: `${date}T00:00:00.000Z`,
        // },
        where: query,
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
          {
            model: db.Movie,
            as: "movieshows",
            attributes: ["slug"],
          },
        ],
        order: ['timeStart']
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
          {
            model: db.Movie,
            as: "movieshows",
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
