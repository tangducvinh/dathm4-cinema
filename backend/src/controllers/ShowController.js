const ShowService = require("../services/ShowService");

const getAllShow = async (req, res) => {
  try {
    const { movieId, date, cinemaId } = req.query;
    console.log(req.query);
    const response = await ShowService.getAllShow(movieId, date, cinemaId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      msg: "Error in controller : " + error,
    });
  }
};

const getDetailShow = async (req, res) => {
  try {
    const { sid } = req.params;
    const response = await ShowService.getDetailShow(sid);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      msg: "Error in controller : " + error,
    });
  }
};

module.exports = {
  getAllShow,
  getDetailShow,
};
