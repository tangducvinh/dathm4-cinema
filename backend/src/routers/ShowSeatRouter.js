const express = require("express");
const router = express.Router();
const ShowSeatController = require("../controllers/ShowSeatController");

router.get("/getDetailShowSeat/:sid", ShowSeatController.getDetailShowSeat);

module.exports = router;
