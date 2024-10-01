const express = require("express");
const router = express.Router();
const ShowController = require("../controllers/ShowController");

router.get("/getDetailShow/:sid", ShowController.getDetailShow);
// Lấy ra các show của 1 phim ở 1 rạp
router.get("/getAllShow", ShowController.getAllShow);

module.exports = router;
