const CinemaService = require("../services/CinemaService");

const getAllCinema = async (req, res) => {
  try {
    const {
      mid = null,
      day = null,
      idCity = null,
      idCinema = null,
    } = req.query;
    const response = await CinemaService.getAllCinema(
      mid,
      day,
      idCity,
      idCinema
    );

    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      msg: "Error in controller : " + error,
    });
  }
};

// const getDetailMovie = async (req, res) => {
//   try {
//     const { mid } = req.params;

//     console.log("mid ", mid);
//     const response = await MovieService.getDetailMovie(mid);
//     return res.status(200).json(response);
//   } catch (error) {
//     return res.status(404).json({
//       msg: "Error in controller : " + error,
//     });
//   }
// };

module.exports = {
  getAllCinema,
};
