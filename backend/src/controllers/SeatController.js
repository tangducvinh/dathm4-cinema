const SeatService = require("../services/SeatService");

const getListSeat = async (req, res) => {
  try {
    const { roomId } = req.query;
    console.log(roomId);
    const response = await SeatService.getListSeat(roomId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      msg: "Error in controller : " + error,
    });
  }
};

module.exports = {
  getListSeat,
};
