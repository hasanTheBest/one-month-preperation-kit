function maxMin(k, arr) {
  let min = Number.MAX_SAFE_INTEGER;
  arr.sort((a, b) => a - b);

  for (let i = 0; i <= arr.length - k; i++) {
    // let items = [];

    // for (let j = 0; j < k; j++) {
    //   items.push(arr[i + j]);
    // }

    // let difference = Math.max(...items) - Math.min(...items);

    // console.log("items", arr.slice(i, i+k))

    let difference =
      Math.max(...arr.slice(i, i + k)) - Math.min(...arr.slice(i, i + k));

    if (difference < min) {
      min = difference;
    }
  }

  return min;
}

console.log(maxMin(3, [10, 100, 300, 200, 1000, 20, 30])); // 20
