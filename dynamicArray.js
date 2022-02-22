function dynamicArray(n, queries) {
  // creating 2d empty array, arr
  const arr = [...new Array(n).fill(0).map((e) => [])];

  // declaring an interger inintialed with 0
  let lastAnswer = 0,
    answers = [];

  for (let q of queries) {
    // 1. idx value
    let idx = (q[1] ^ lastAnswer) % n;

    // Qyery type 1
    if (1 === q[0]) {
      // appending to arr[idx]
      arr[idx].push(q[2]);
    } else {
      // Assigning value to last answer
      lastAnswer = arr[idx][q[2] % arr[idx].length];

      // Storing lastAnswer value to answer array
      answers.push(lastAnswer);
    }
  }

  return answers;
}

console.log(
  dynamicArray(2, [
    [1, 0, 5],
    [1, 1, 7],
    [1, 0, 3],
    [2, 1, 0],
    [2, 1, 1],
  ])
); // [7, 3]
