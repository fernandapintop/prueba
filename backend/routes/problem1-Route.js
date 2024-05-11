const express = require("express");
const problem1Controller = require("../controllers/problem1-Controller");

const router = express.Router();

router.route("/").post(problem1Controller.getQueensAttack);

module.exports = router;
