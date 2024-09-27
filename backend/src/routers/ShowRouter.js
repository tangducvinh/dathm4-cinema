const express = require("express");
const router = express.Router();
const ShowController = require("../controllers/ShowController");

router.get("/getAllShow", ShowController.getAllShow);
// router.get("/getDetailMovie/:mid", movieController.getDetailMovie);

module.exports = router;
