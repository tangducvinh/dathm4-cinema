const express = require("express");
const router = express.Router();
const seatController = require("../controllers/SeatController");

router.get("/list-seat", seatController.getListSeat);

module.exports = router;
