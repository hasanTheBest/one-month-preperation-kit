function pangrams(s) {
  // unicode a-z 97 - 122
  let characterCheck = {},
    letterCode = 97;

  for (let ch of s.toLowerCase()) {
    if (ch === " ") continue;

    characterCheck[ch] = true;

    if (letterCode <= 122 && !characterCheck.hasOwnProperty(ch)) {
      characterCheck[String.fromCharCode(letterCode)] = false;
    }

    letterCode++;
  }

  if (
    Object.values(characterCheck).includes(false) ||
    Object.values(characterCheck).length < 26
  ) {
    return "not pangram";
  } else {
    return "pangram";
  }
}

console.log(pangrams("qmExzBIJmdELxyOFWv LOCmefk TwPhargKSPEqSxzveiun"));
// pangram

// console.log(
//   pangrams("We promptly judged antique ivory buckles for the next prize")
// );
// pangram

// input s= We promptly judged antique ivory buckles for the prize
// output not pangram;
