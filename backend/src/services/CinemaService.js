const { where, order } = require("sequelize");
const db = require("../models");
const { raw } = require("body-parser");
const { Sequelize } = require("@sequelize/core");

const getAllCinema = (mid, day, idCity, idCinema) => {
  return new Promise(async (resolve, reject) => {
    // console.log(mid, day, idCity, idCinema);
    try {
      let response;
      if (idCity == null && idCinema == null) {
        response = await db.Cinema.findAll({
          attributes: ["id", "name"],
          // order: [["id", "ASC"]],
          include: [
            {
              model: db.CinemaHall,
              as: "cinemahalls",
              attributes: ["id"],
              include: [
                {
                  model: db.Show,
                  as: "cinemahallshows",
                  where: {
                    idMovie: mid,
                    date: day,
                  },
                  attributes: ["id", "date", "timeStart", "timeEnd"],
                  order: [["timeStart", "DESC"]],
                },
              ],
            },
            {
              model: db.City,
              as: "cities",
              attributes: ["id", "name"],
            },
          ],
        });
      } else if (idCity !== null && idCinema === null) {
        response = await db.Cinema.findAll({
          attributes: ["id", "name"],

          include: [
            {
              model: db.CinemaHall,
              as: "cinemahalls",
              attributes: ["id"],
              include: [
                {
                  model: db.Show,
                  as: "cinemahallshows",
                  where: {
                    idMovie: mid,
                    date: day,
                  },
                  attributes: ["id", "date", "timeStart", "timeEnd"],
                },
              ],
            },
            {
              model: db.City,
              as: "cities",
              attributes: ["id", "name"],
              where: {
                id: idCity,
              },
            },
          ],
        });
      } else if (idCity === null && idCinema !== null) {
        response = await db.Cinema.findAll({
          attributes: ["id", "name"],
          where: { id: idCinema },
          include: [
            {
              model: db.CinemaHall,
              as: "cinemahalls",
              attributes: ["id"],
              include: [
                {
                  model: db.Show,
                  as: "cinemahallshows",
                  where: {
                    idMovie: mid,
                    date: day,
                  },
                  attributes: ["id", "date", "timeStart", "timeEnd"],
                },
              ],
            },
            {
              model: db.City,
              as: "cities",
              attributes: ["id", "name"],
            },
          ],
        });
      } else if (idCity !== null && idCinema !== null) {
        response = await db.Cinema.findAll({
          attributes: ["id", "name"],
          where: { id: idCinema },
          include: [
            {
              model: db.CinemaHall,
              as: "cinemahalls",
              attributes: ["id"],
              include: [
                {
                  model: db.Show,
                  as: "cinemahallshows",
                  where: {
                    idMovie: mid,
                    date: day,
                  },
                  attributes: ["id", "date", "timeStart", "timeEnd"],
                },
              ],
            },
            {
              model: db.City,
              as: "cities",
              attributes: ["id", "name"],
              where: {
                id: idCity,
              },
            },
          ],
        });
      }
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
  getAllCinema,
};
