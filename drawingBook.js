function pageCount(n, p) {
  if (1 === p || n === p) {
    return 0;
  }

  if (1 === n - p && n % 2 === 0) {
    return 1;
  }

  let pagesToTurn;
  if (p < n / 2) {
    // first to last
    pagesToTurn = Math.floor(p / 2);
  } else {
    // last to first
    pagesToTurn = Math.floor((n - p) / 2);
  }

  return pagesToTurn;
}

console.log(pageCount(2, 1)); // case-6 // 0
// console.log(pageCount(5, 4)); // 0
// console.log(pageCount(6, 5)); // 1
// console.log(pageCount(7, 3)); // 1
// console.log(pageCount(6, 2)); // 1
// console.log(pageCount(95073, 17440)); // 8720 // case 7
