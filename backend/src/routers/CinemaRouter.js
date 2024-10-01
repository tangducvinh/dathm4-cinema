const express = require("express");
const router = express.Router();
const CinemaController = require("../controllers/CinemaController");

router.get("/getAllCinema", CinemaController.getAllCinema);
// router.get("/getDetailMovie/:mid", movieController.getDetailMovie);

module.exports = router;
