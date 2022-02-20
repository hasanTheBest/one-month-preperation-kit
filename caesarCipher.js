function caesarCipher(s, k) {
  let encryptedText = "";

  for (let i = 0; i < s.length; ++i) {
    const ch = s.substr(i, 1);
    const code = ch.charCodeAt();

    if (97 <= code && 122 >= code) {
      let findCode =
        code - 97 + 1 + k < 26
          ? code + k
          : ((Math.abs(code - 97) + k) % 26) + 97;

      encryptedText += String.fromCharCode(findCode);
    } else if (65 <= code && 90 >= code) {
      let findCode =
        code - 65 + 1 + k < 26
          ? code + k
          : ((Math.abs(code - 65) + k) % 26) + 65;

      encryptedText += String.fromCharCode(findCode);
    } else {
      encryptedText += ch;
    }
  }

  return encryptedText;
}

console.log(caesarCipher("middle-Outz", 2)); // okffng-Qwvb
