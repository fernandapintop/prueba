class QueensMove {
  constructor(n, k, rq, cq, obstacles) {
    if (n < 1 || n > Math.pow(10, 5)) {
      throw new Error("the side of n must be between 1 y 10^5");
    }
    if (k < 0 || k > Math.pow(10, 5)) {
      throw new Error("the number of obstacles must to be between  0 y 10^5");
    }
    this.n = n;
    this.numObstacles = k;
    this.queenPosition = { row: rq, col: cq };
    this.obstacles = obstacles;

    // if (obstacles) {
    //   throw new Error("obstacles is a invaldi data");
    // }

    for (const obstacle of obstacles) {
      let i = 0;
      let obstacleRow = obstacle[i];
      let obstacleCol = obstacle[i + 1];
      i++;
      if (obstacleRow === rq && obstacleCol === cq) {
        throw new Error("¡there is an obstacle in the queen position!");
      }
    }
  }

  isValidPosition(row, col) {
    return row >= 1 && row <= this.n && col >= 1 && col <= this.n;
  }

  isObstacle(row, col) {
    if (this.numObstacles != 0) {
      for (const obstacle of this.obstacles) {
        const obstRow = obstacle[0];
        const obstCol = obstacle[1];

        if (row === obstRow && col === obstCol) {
          return true;
        }
      }
    }

    return false;
  }

  queensAttack() {
    let count = 0;
    let message = "";

    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
    ];

    if (this.isValidPosition(this.queenPosition.row, this.queenPosition.col)) {
      for (const direction of directions) {
        let [dr, dc] = direction;

        let row = this.queenPosition.row + dr;
        let col = this.queenPosition.col + dc;
        let obstacleFind = false;

        while (this.isValidPosition(row, col) && !obstacleFind) {
          if (this.isObstacle(row, col)) {
            obstacleFind = true;
          } else {
            count++;
          }
          row += dr;
          col += dc;
        }
      }
    } else {
      message = "invalid queen position";
      return message;
    }
    return count;
  }
}
module.exports = QueensMove;
