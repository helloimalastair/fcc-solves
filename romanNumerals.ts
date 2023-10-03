const numeralMap: [number, string][] = [
  [1000, 'M'],
  [900, "CM"],
  [500, 'D'],
  [400, "CD"],
  [100, 'C'],
  [90, "XC"],
  [50, 'L'],
  [40, "XL"],
  [10, 'X'],
  [9, "IX"],
  [5, 'V'],
  [4, "IV"],
  [1, 'I']
];

function convertToRoman(num: number) {
  let roman = "";
  for(const [number, symbol] of numeralMap) {
    while(num >= number) {
      roman += symbol;
      num -= number;
    }
  }
  return roman;
}
 
console.log(convertToRoman(36));