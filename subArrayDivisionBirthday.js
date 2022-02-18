// PROBLEM
// Two children, Lily and Ron, want to share a chocolate bar.
// Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// 1. The length of the segment matches Ron's birth month, and,
// 2. The sum of the integers on the squares is equal to his birth day.

// Determine how many ways she can divide the chocolate.

function birthday(s, d, m) {
  const square = [];

  for (let i = 0; i < s.length - m + 1; i++) {
    let sum = 0,
      item = [];

    for (let j = i + 1; j < i + m; j++) {
      sum += s[j];
      item.push(s[j]);
    }

    if (d === s[i] + sum) {
      square.push([s[i], ...item]);
    }
  }

  return square.length;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2)); // 2
