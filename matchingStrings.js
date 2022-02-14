// input
var queries = ["abcde", "sdaklfj", "asdjf", "na", "basdn"];
var strings = [
  "abcde",
  "sdaklfj",
  "asdjf",
  "na",
  "basdn",
  "sdaklfj",
  "asdjf",
  "na",
  "asdjf",
  "na",
  "basdn",
  "sdaklfj",
  "asdjf",
];

function matchingStrings(strings, queries) {
  // Write your code here
  let result = [],
    repeat = 0;
  for (let query of queries) {
    result.push(itemCount(strings, query));
  }
}

console.log(matchingStrings(strings, queries));
// output [1, 3, 4, 3, 2]

function itemCount(strings, query) {
  const firstIndex = strings.indexOf(query);
  const lastIndex = strings.lastIndexOf(query);

  if (strings.includes(query)) {
    if (firstIndex === lastIndex) {
      repeat += 1;
    } else {
      let newStrings = strings.slice(firstIndex + 1, lastIndex);
      repeat += 2;
      itemCount(newStrings, query);
    }
  } else {
    return 0;
  }

  return repeat;
}
