function flippingBits(n) {
  const binary = n.toString(2).padStart(32, 0);

  let decimal = 0;
  // digit last to first
  for (let i = 31; i >= 0; i--) {
    // flip digit 0 -> 1
    if (binary.substr(i, 1) === "0") {
      // power 0 - 31
      decimal += 1 * Math.pow(2, 31 - i);
    } else {
      // flip digit 1 -> 0
      decimal += 0 * Math.pow(2, 31 - i);
    }
  }

  return decimal;
}

console.log(flippingBits(1));

// 2147483647 = 2147483648
// 1 = 4294967294
// 0 = 4294967295
