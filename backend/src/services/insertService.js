const db = require("../models");
const bcrypt = require("bcrypt");
const movie = require("../data/movie.json");
const func = require("../utils/func");

const dataBody = movie;
import { where } from "sequelize";
import { v4 } from "uuid";
require("dotenv").config();
const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

// insert movie
const insert = () => {
  return new Promise(async (resolve, reject) => {
    try {
      dataBody.forEach(async (item) => {
        let movieId = v4();

        await db.Movie.create({
          id: movieId,
          idCategory: "1",
          name: item?.title?.name,
          description: item?.content?.description,
          introducer: item?.introducer,
          poster: item?.poster,
          backDrop: item?.backDrop,
          slug: func.formatVietnameseToString(item?.title?.name),
          rating: item?.vote,
          releaseYear: item?.date?.releaseDay,
          time: item?.date?.timer,
          country: item?.country,
          old: item?.title?.old,
          trailer: item?.trailer,
        });

        item.types.map(async (ite) => {
          let typeId = v4();
          let idMain = v4();
          await db.Type.create({
            id: typeId,
            name: ite,
          });
          await db.TypeMovie.create({
            id: idMain,
            idMovie: movieId,
            idType: typeId,
          });
        });

        item.actor.map(async (ite) => {
          let idMain = v4();
          let actorId = v4();
          await db.Actor.create({
            id: actorId,
            name: ite,
          });
          await db.ActorMovie.create({
            id: idMain,
            idMovie: movieId,
            idActor: actorId,
          });
        });

        item.director.map(async (ite) => {
          let idMain = v4();
          let directorId = v4();
          await db.Director.create({
            id: directorId,
            name: ite,
          });
          await db.DirectorMovie.create({
            id: idMain,
            idMovie: movieId,
            idDirector: directorId,
          });
        });
      });
      resolve("Done");
    } catch (error) {
      reject(error);
    }
  });
};

// insert seat

// const insert = () => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       // for (var i = 1; i <= 10; i++) {
//       //   let seatId = v4();
//       //   await db.CinemaSeat.create({
//       //     id: seatId,
//       //     seatNumber: i < 10 ? "C0" + i : "C" + i,
//       //     type: "normal",
//       //     idCinemaHall: "CH1",
//       //   });
//       // }

//       // for (var i = 1; i <= 10; i++) {
//       //   let seatId = v4();
//       //   await db.ShowSeat.create({
//       //     id: seatId,
//       //     seatNumber: i < 10 ? "C0" + i : "C" + i,
//       //     type: "normal",
//       //     idCinemaHall: "CH1",
//       //   });
//       // }

//       const res = await db.CinemaSeat.findAll({
//         raw: true,
//         where: {
//           idCinemaHall: "CH1",
//         },
//         order: [["seatNumber", "ASC"]],
//       });
//       // console.log("res ", res);

//       res.map(async (item) => {
//         let seatId = v4();
//         await db.ShowSeat.create({
//           id: seatId,
//           status: "no",
//           price: 50000,
//           idCinemaSeat: item.id,
//           idShow: "SH02",
//         });
//       });

//       resolve("done");
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

module.exports = {
  insert,
};
