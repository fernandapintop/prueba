const QueensMove = require("../utils/queensAttack");
const validateK = require("../utils/validateK");

exports.getQueensAttack = function (req, res) {
  const { n, k, rq, cq } = req.body || {};
  let obstacles = req.body.obstacles;
  const obstaclesNumber = obstacles.length;

  const [isValid, erorMessage] = validateK(k, obstaclesNumber);

  try {
    const chess = new QueensMove(n, k, rq, cq, obstacles);
    const attackingPositions = chess.queensAttack(n, k, rq, cq, obstacles);

    if (isValid) {
      res.status(200).json({
        status: "success",
        data: attackingPositions,
      });
    } else {
      res.status(400).json({
        error: erorMessage,
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
