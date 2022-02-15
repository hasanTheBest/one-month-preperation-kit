function lonelyinteger(a) {
  const count = {};

  for (let item of a) {
    if (!count[String(item)]) {
      count[String(item)] = 1;
    } else {
      count[String(item)]++;
    }
  }

  const keys = Object.keys(count);
  const values = Object.values(count);

  return parseInt(keys[values.indexOf(1)]);
}

console.log(lonelyinteger([1, 4, 0, 0, 10, 20, 0, 10, 20, 100, 100, 2, 2, 1]));
