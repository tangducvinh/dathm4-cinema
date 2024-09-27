const { where } = require("sequelize");
const db = require("../models");

const getAllShow = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Show.findAll({
        nest: true,
        include: [
          {
            model: db.Movie,
            as: "movieshows",
          },
          {
            model: db.CinemaHall,
            as: "cinemashows",
            include: [
              {
                model: db.CinemaSeat,
                as: "cinemahallseats",
              },
              {
                model: db.Cinema,
                as: "cinemas",
                include: [
                  {
                    model: db.City,
                    as: "cities",
                  },
                ],
              },
            ],
          },
        ],
        // include: [
        //   {
        //     model: db.TypeMovie,
        //     as: "movietypes",
        //     attributes: ["idType"],
        //     include: [
        //       {
        //         model: db.Type,
        //         as: "types",
        //         attributes: ["name"],
        //       },
        //     ],
        //   },
        //   {
        //     model: db.DirectorMovie,
        //     as: "moviedirectors",
        //     attributes: ["idDirector"],
        //     include: [
        //       {
        //         model: db.Director,
        //         as: "directors",
        //         attributes: ["name"],
        //       },
        //     ],
        //   },
        //   {
        //     model: db.ActorMovie,
        //     as: "movieactors",
        //     attributes: ["idActor"],
        //     include: [
        //       {
        //         model: db.Actor,
        //         as: "actors",
        //         attributes: ["name"],
        //       },
        //     ],
        //   },
        // ],
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
};
