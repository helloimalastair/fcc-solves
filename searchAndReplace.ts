function myReplace(str: string, before: string, after: string) {
  // If the first letter of before is uppercase, make the first letter of after uppercase
  // Else, make the first letter of after lowercase
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }
  // Replace before with after in str
  return str.replace(before, after);
}

console.log(myReplace("I think we should look up there", "up", "Down"));