const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/getAllMovie/:list", movieController.getAllMovie);
router.get("/getDetailMovie/:mid", movieController.getDetailMovie);

module.exports = router;
