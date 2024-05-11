const express = require("express");
const problem2Controller = require("../controllers/problem2-Controller");

const router = express.Router();

router.route("/").post(problem2Controller.getValuesOfSubString);

module.exports = router;
