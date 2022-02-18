// There is a large pile of socks that must be paired by color.
// Given an array of integers representing the color of each sock,
// determine how many pairs of socks with matching colors there are.

// SOLUTION
function sockMerchant(n, ar) {
  let itemTable = {},
    pair = 0;

  for (let i = 0; i < n; i++) {
    if (!itemTable.hasOwnProperty(ar[i])) {
      itemTable[ar[i]] = 1;
    } else {
      ++itemTable[ar[i]];
    }
  }

  for (let item of Object.values(itemTable)) {
    pair += Math.floor(item / 2);
  }

  return pair;
}

console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])); // 4

// Solution is rejected with 4 test case failed
// function sockMerchant(n, ar) {
//   ar.sort((a, b) => a - b)
//   let pair = 0;
//   for(let i = 0; i < n - 1; i = i + 2 ){
//     if(ar[i] === ar[i+1]) {
//       pair++
//     }
//   }
//   return pair;
// }

// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])) // 3
