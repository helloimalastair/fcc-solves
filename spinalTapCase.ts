const wordRegex = /[A-Z]?[a-z]+/g;
function spinalCase(str: string) {
  return Array.from(str.matchAll(wordRegex)).join('-').toLowerCase();
}

console.log(spinalCase("thisIsSpinalTap"));