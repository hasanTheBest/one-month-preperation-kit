function gridChallenge(grid) {
  // sort strign
  const sorted = grid.map((item) => item.split("").sort().join(""));

  for (let i = 0; i < grid.length; i++) {
    const sortCol = [];

    for (let j = 0; j < grid.length; j++) {
      sortCol.push(sorted[j][i]);
    }

    if (sortCol.join("") !== sortCol.sort().join("")) return "NO";
  }

  return "YES";
}

console.log(gridChallenge(["eabcd", "fghij", "olkmn", "trpqs", "xywuv"])); // YES
// console.log(gridChallenge(["abc", "ade", "efg"])) // YES
