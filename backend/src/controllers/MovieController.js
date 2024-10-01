const MovieService = require("../services/MovieService");

const getAllMovie = async (req, res) => {
  try {
    const { list } = req.params;
    const response = await MovieService.getAllMovie(list);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      msg: "Error in controller : " + error,
    });
  }
};

const getDetailMovie = async (req, res) => {
  try {
    const { mid } = req.params;

    console.log("mid ", mid);
    const response = await MovieService.getDetailMovie(mid);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      msg: "Error in controller : " + error,
    });
  }
};

module.exports = {
  getAllMovie,
  getDetailMovie,
};
