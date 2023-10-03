const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Get index of alpha char, add 13, mod 26, return char at new index
function rot13(str: string) {
  let newString = "";
  for(const char of str) {
    const charIndex = ALPHABET.indexOf(char);
    if(charIndex === -1) {
      newString += char;
    } else {
      const newIndex = (charIndex + 13) % ALPHABET.length;
      newString += ALPHABET[newIndex];
    }
  }
  return newString;
}

console.log(rot13("SERR PBQR PNZC"));