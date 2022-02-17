// Problem Statement: Given a square matrix, calculate the absolute
// difference between the sums of its diagonals

function diagonalDifference(arr) {
  // two diagonal element
  let leftToRight = 0,
    rightToLeft = 0;

  for (let i = 0; i < arr.length; i++) {
    // arr[0][0], and so on
    leftToRight += arr[i][i];

    // arr[0][3-1-0] = arr[0][2], and so on
    rightToLeft += arr[i][arr.length - 1 - i];
  }

  return Math.abs(leftToRight - rightToLeft);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
// output 15
