const { where } = require("sequelize");
const db = require("../models");

const getAllMovie = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Movie.findAll({
        nest: true,
        include: [
          {
            model: db.TypeMovie,
            as: "movietypes",
            attributes: ["idType"],
            include: [
              {
                model: db.Type,
                as: "types",
                attributes: ["name"],
              },
            ],
          },
          {
            model: db.DirectorMovie,
            as: "moviedirectors",
            attributes: ["idDirector"],
            include: [
              {
                model: db.Director,
                as: "directors",
                attributes: ["name"],
              },
            ],
          },
          {
            model: db.ActorMovie,
            as: "movieactors",
            attributes: ["idActor"],
            include: [
              {
                model: db.Actor,
                as: "actors",
                attributes: ["name"],
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

const getDetailMovie = (mid) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Movie.findOne({
        where: { id: mid },
        nest: true,
        include: [
          {
            model: db.TypeMovie,
            as: "movietypes",
            attributes: ["idType"],
            include: [
              {
                model: db.Type,
                as: "types",
                attributes: ["name"],
              },
            ],
          },
          {
            model: db.DirectorMovie,
            as: "moviedirectors",
            attributes: ["idDirector"],
            include: [
              {
                model: db.Director,
                as: "directors",
                attributes: ["name"],
              },
            ],
          },
          {
            model: db.ActorMovie,
            as: "movieactors",
            attributes: ["idActor"],
            include: [
              {
                model: db.Actor,
                as: "actors",
                attributes: ["name"],
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
  getAllMovie,
  getDetailMovie,
};
