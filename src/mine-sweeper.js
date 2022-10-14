const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  // const neighbors = [
  //   [r - 1, c],
  //   [r - 1, c + 1],
  //   [r, c + 1],
  //   [r + 1, c + 1],
  //   [r + 1, c],
  //   [r + 1, c - 1],
  //   [r, c - 1],
  //   [r - 1, c - 1],
  // ];
  const nghRow = [-1, -1, 0, 1, 1, 1, 0, -1];
  const nghCol = [0, 1, 1, 1, 0, -1, -1, -1];

  const isInMatrix = (row, col, matRow, matCol) => {
    // console.log(row, col);
    if (row < 0 || col < 0 || row > matRow || col > matCol) return false;
    return true;
  };

  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    const row = [];
    for (let k = 0; k < matrix[0].length; k++) {
      let countMines = 0;
      for (let n = 0; n < nghRow.length; n++) {
        if (
          isInMatrix(
            i + nghRow[n],
            k + nghCol[n],
            matrix.length - 1,
            matrix[0].length - 1
          )
        ) {
          // console.log(matrix[i + nghRow[n]][k + nghCol[n]]);
          if (matrix[i + nghRow[n]][k + nghCol[n]] === true) countMines += 1;

          // console.log(countMines);
        }
      }
      row.push(countMines);
    }
    result.push(row);
  }
  return result;
}

module.exports = {
  minesweeper,
};
