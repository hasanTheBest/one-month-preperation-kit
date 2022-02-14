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
  let result = [];

  for (let query of queries) {
    result.push(itemCount(strings, query, 0));
  }

  return result;
}

console.log(matchingStrings(strings, queries));
// output [1, 3, 4, 3, 2]

function itemCount(strings, query, repeat) {
  const firstIndex = strings.indexOf(query);
  const lastIndex = strings.lastIndexOf(query);

  if (strings.includes(query)) {
    if (firstIndex === lastIndex) {
      repeat += 1;
    } else {
      let newStrings = strings.slice(firstIndex + 1, lastIndex);
      repeat += 2;
      return itemCount(newStrings, query, repeat);
    }
  }

  return repeat;
}
