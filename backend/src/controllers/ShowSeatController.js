const ShowSeatService = require("../services/ShowSeatService");

const getDetailShowSeat = async (req, res) => {
  try {
    const { sid } = req.params;
    const response = await ShowSeatService.getDetailShowSeat(sid);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      msg: "Error in controller : " + error,
    });
  }
};

module.exports = {
  getDetailShowSeat,
};
