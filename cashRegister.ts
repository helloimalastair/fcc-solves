const strToNum = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
};

const flattenDecimal = (num: number) => Math.round(num * 100) / 100;

function checkCashRegister(price: number, cash: number, cid: [string, number][]) {
  let changeOwed = cash - price;
  const totalCID = flattenDecimal(cid.reduce((a, b) => a += b[1], 0));
  // Over Max Cash Available
  if(changeOwed > totalCID) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  // Exactly Max Cash Available
  if (changeOwed === totalCID) {
    return {status: "CLOSED", change: cid};
  }
  // Calculate Change
  const sortedCID = cid.sort((a, b) => strToNum[b[0]] - strToNum[a[0]]);
  const change: [string, number][] = [];
  for(const valuta of sortedCID) {
    const computed = Math.floor(changeOwed / strToNum[valuta[0]]);
    if(computed > 0 && valuta[1] !== 0) {
      let computedVal = computed * strToNum[valuta[0]];
      if(computedVal > valuta[1]) {
        computedVal = valuta[1];
      }
      change.push([valuta[0], computedVal]);
      valuta[1] = valuta[1] - computedVal;
      console.log(changeOwed, computedVal);
      changeOwed = flattenDecimal(changeOwed - computedVal);
    }
  }
  if(changeOwed > 0) return {status: "INSUFFICIENT_FUNDS", change: []};
  return {status: "OPEN", change};
}

console.log("Should Return: ", {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]});
console.log("Returned: ", checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));