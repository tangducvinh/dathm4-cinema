const { where } = require("sequelize");
const db = require("../models");

const getAllMovie = (list) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Movie.findAll({
        nest: true,
        attributes: [
          "id",
          "name",
          "trailer",
          "slug",
          "old",
          "poster",
          "backDrop",
          "rating",
        ],
        include: [
          {
            model: db.Category,
            as: "categories",
            attributes: ["status"],
            where: { status: list },
          },
          // {
          //   model: db.TypeMovie,
          //   as: "movietypes",
          //   attributes: ["idType"],
          //   include: [
          //     {
          //       model: db.Type,
          //       as: "types",
          //       attributes: ["name"],
          //     },
          //   ],
          // },
          // {
          //   model: db.DirectorMovie,
          //   as: "moviedirectors",
          //   attributes: ["idDirector"],
          //   include: [
          //     {
          //       model: db.Director,
          //       as: "directors",
          //       attributes: ["name"],
          //     },
          //   ],
          // },
          // {
          //   model: db.ActorMovie,
          //   as: "movieactors",
          //   attributes: ["idActor"],
          //   include: [
          //     {
          //       model: db.Actor,
          //       as: "actors",
          //       attributes: ["name"],
          //     },
          //   ],
          // },
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
        where: { slug: mid },
        nest: true,
        attributes: [
          "id",
          "name",
          "trailer",
          "slug",
          "old",
          "poster",
          "backDrop",
          "rating",
          "time",
          "releaseYear",
          "country",
          "description",
          "introducer",
        ],
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
          // {
          //   model: db.Show,
          //   as: "movieshows",
          //   attributes: [
          //     "id",
          //     "date",
          //     "timeStart",
          //     "timeEnd",
          //     "idMovie",
          //     "idCinemaHall",
          //   ],
          //   include: [
          //     {
          //       model: db.CinemaHall,
          //       as: "cinemahallshows",
          //       attributes: ["name", "idCinema"],
          //       include: [
          //         {
          //           model: db.Cinema,
          //           as: "cinemas",
          //           attributes: ["name", "idCity"],
          //           include: [
          //             {
          //               model: db.City,
          //               as: "cities",
          //               attributes: ["name"],
          //             },
          //           ],
          //         },
          //       ],
          //     },
          //   ],
          // },
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
