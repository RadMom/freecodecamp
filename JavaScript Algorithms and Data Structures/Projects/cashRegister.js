function checkCashRegister(price, cash, cid) {
  const moneySchema = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let change = {
    status: "",
    change: [],
  };

  let totalCashCid = 0;
  let neededChange = Number((cash - price).toFixed(2));

  for (let el of cid) {
    totalCashCid += Number(el[1]);
  }

  totalCashCid = Number(totalCashCid.toFixed(2));

  if (neededChange > totalCashCid) {
    change.status = "INSUFFICIENT_FUNDS";
    change.change = [];
  } else if (neededChange === totalCashCid) {
    change = { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();
    for (let el of cid) {
      let temp = [el[0], 0];
      if (neededChange >= el[1]) {
        temp[1] = el[1];
        change.change.push(temp);
        el[1] = 0;
        neededChange -= temp[1];
		neededChange=neededChange.toFixed(2)
      } else {
        if (neededChange >= moneySchema[el[0]]) {
          while (neededChange-moneySchema[el[0]] >= 0|| el[1]===0) {
            neededChange -= moneySchema[el[0]];
            temp[1] += moneySchema[el[0]];
            el[1] -= moneySchema[el[0]];
			neededChange=neededChange.toFixed(2)
          }
          change.change.push(temp);
        }
      }
    }
    
    if (neededChange > 0) {
      change.status = "INSUFFICIENT_FUNDS";
      change.change = [];
    } else {
      change.status = "OPEN";
    }
  }

//   console.log(change);
//   console.log(neededChange);
  return change;
}

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
