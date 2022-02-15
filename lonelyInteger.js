function lonelyinteger(a) {
  const count = {};
  let expectItem = a[0];

  for (let item of a) {
    if (!count[item]) {
      count[item] = 1;
      expectItem = item;
    } else {
      count[item]++;
    }
  }

  console.log(Object.entries(count));
  return expectItem;
}

console.log(lonelyinteger([1, 4, 0, 0, 10, 20, 0, 10, 20, 100, 100, 2, 2, 1]));
