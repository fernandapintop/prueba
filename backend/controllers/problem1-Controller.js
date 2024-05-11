const QueensMove = require("../utils/queensAttack");

exports.getQueensAttack = function (req, res) {
  const { n, k, rq, cq } = req.body || {};
  let obstacles = req.body.obstacles;

  if (k === 0) {
    obstacles = [];

    if (Array.isArray(req.body.obstacles)) {
      return res
        .status(400)
        .json({
          error: "the obstacles number is 0 so you cant put the third line",
        });
    }
  }

  try {
    const chess = new QueensMove(n, k, rq, cq, obstacles);
    const attackingPositions = chess.queensAttack(n, k, rq, cq, obstacles);
    res.status(200).json({
      status: "success",
      data: attackingPositions,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
