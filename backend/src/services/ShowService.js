const { where } = require("sequelize");
const db = require("../models");
const raw = require("body-parser/lib/types/raw");

// const getAllShow = () => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const response = await db.Show.findAll({
//         where: {
//           idMovie: "7c440aee-6cf7-4f1d-8e60-cb5a72c4dc6b",
//         },
//         attributes: { exclude: ["createdAt", "updatedAt"] },
//         include: [
//           {
//             model: db.CinemaHall,
//             as: "cinemahallshows",
//             attributes: { exclude: ["createdAt", "updatedAt"] },
//             include: [
//               {
//                 model: db.Cinema,
//                 as: "cinemahalls",
//                 attributes: { exclude: ["createdAt", "updatedAt"] },
//                 where: {
//                   id: "1",
//                 },
//                 include: [
//                   {
//                     model: db.City,
//                     as: "cities",
//                     attributes: { exclude: ["createdAt", "updatedAt"] },
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       });

//       resolve({
//         mes: response ? "OK" : "ERR",
//         data: response || null,
//       });
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

const getAllShow = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Show.findAll({
        where: {
          idMovie: "1a3ede24-6bc2-4700-a937-8045dc0adb50",
          date: "2024-10-11T00:00:00.000Z",
        },

        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: [
          {
            model: db.CinemaHall,
            as: "cinemahallshows",
            attributes: { exclude: ["createdAt", "updatedAt"] },
            group: ["idCinema"],
            include: [
              {
                model: db.Cinema,
                as: "cinemahalls",
                attributes: { exclude: ["createdAt", "updatedAt"] },
                // where: {
                //   id: "1",
                // },

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
