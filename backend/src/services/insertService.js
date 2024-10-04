const db = require("../models");
const bcrypt = require("bcrypt");
const movie = require("../data/movie.json");
const moviesoon = require("../data/moviesoon.json");
const func = require("../utils/func");

const dataBody = moviesoon;
import { where } from "sequelize";
import { v4 } from "uuid";
require("dotenv").config();
const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

// insert movie
// const insert = () => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       dataBody.forEach(async (item) => {
//         let movieId = v4();

//         await db.Movie.create({
//           id: movieId,
//           idCategory: "2",
//           name: item?.title?.name,
//           trailer: item?.trailer,
//           slug: func.formatVietnameseToString(item?.title?.name),
//           old: item?.title?.old,
//           description: item?.content?.description,
//           introducer: item?.introducer,
//           poster: item?.poster,
//           backDrop: item?.backDrop,
//           rating: item?.vote,
//           releaseYear: func.converDate(item?.date?.releaseDay),
//           time: item?.date?.timer,
//           country: item?.country,
//         });

//         item.types.map(async (ite) => {
//           let typeId = v4();
//           let idMain = v4();
//           await db.Type.create({
//             id: typeId,
//             name: ite,
//           });
//           await db.TypeMovie.create({
//             id: idMain,
//             idMovie: movieId,
//             idType: typeId,
//           });
//         });

//         item.actor.map(async (ite) => {
//           let idMain = v4();
//           let actorId = v4();
//           await db.Actor.create({
//             id: actorId,
//             name: ite,
//           });
//           await db.ActorMovie.create({
//             id: idMain,
//             idMovie: movieId,
//             idActor: actorId,
//           });
//         });

//         item.director.map(async (ite) => {
//           let idMain = v4();
//           let directorId = v4();
//           await db.Director.create({
//             id: directorId,
//             name: ite,
//           });
//           await db.DirectorMovie.create({
//             id: idMain,
//             idMovie: movieId,
//             idDirector: directorId,
//           });
//         });
//       });
//       resolve("Done");
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

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

// insert rạp phim
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

//       let arr = ["Tôn Đức Thắng", "Lê Duẩn"];

//       for (var i = 1; i <= 2; i++) {
//         let cinemaId = v4();
//         await db.Cinema.create({
//           id: cinemaId,
//           name: "Cinema " + arr[i - 1],
//           total: null,
//           idCity: "DN",
//         });
//         console.log("Tạo xong rạp");
//         for (var j = 1; j <= 3; j++) {
//           let cinemahallId = v4();
//           await db.CinemaHall.create({
//             id: cinemahallId,
//             name: "Rạp " + j,
//             idCinema: cinemaId,
//             col: 10,
//             row: 10 + j,
//           });
//           console.log("Tạo xong sảnh rạp");
//           let count = 10 + j;
//           let rowAlpha = [
//             "A",
//             "B",
//             "C",
//             "D",
//             "E",
//             "F",
//             "G",
//             "H",
//             "I",
//             "J",
//             "K",
//             "L",
//             "M",
//           ];
//           for (let k = 1; k <= count; k++) {
//             for (let l = 1; l <= 10; l++) {
//               let seatId = v4();
//               await db.CinemaSeat.create({
//                 id: seatId,
//                 seatNumber:
//                   l < 10 ? rowAlpha[k - 1] + "0" + l : rowAlpha[k - 1] + l,
//                 type: "normal",
//                 idCinemaHall: cinemahallId,
//               });
//               console.log(
//                 "ghế ",
//                 rowAlpha[k - 1] + l,
//                 " của rap ",
//                 j,
//                 " của sảnh ",
//                 arr[i - 1]
//               );
//             }
//           }
//           console.log("Tạo xong cac cot ghe");
//         }
//       }

//       resolve("done");
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// insert show
const insert = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let rap = [
        "137d9dd1-94e9-4908-b66a-6b078c493710",
        "9d0852f0-99ce-4ad6-9bbb-9c02b2d8e1f4",
        "addeb69c-6344-4920-a6f2-52aa9191599b",
      ];
      let plus = 0;
      for (var k = 0; k < rap.length; k++) {
        for (var i = 1; i <= 31; i++) {
          let showId = v4();
          await db.Show.create({
            id: showId,
            date: `2024-10-${i < 10 ? "0" + i : i}T00:00:00.000Z`,
            timeStart: `2024-10-${i < 10 ? "0" + i : i}T0${
              2 + plus
            }:00:00.000Z`,
            timeEnd: `2024-10-${i < 10 ? "0" + i : i}T0${4 + plus}:00:00.000Z`,
            idMovie: "1a3ede24-6bc2-4700-a937-8045dc0adb50",
            idCinemaHall: rap[k],
          });
        }
        plus = plus + 3;
      }

      resolve("done");
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  insert,
};
