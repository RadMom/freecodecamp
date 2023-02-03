function rot13(str) {

  let strToArr = str.split("");

  for (let i = 0; i < strToArr.length; i++) {

    let decoded = str.charCodeAt(i);
    if (decoded >= 65 && decoded <= 90) {
        
      if (decoded + 13 > 90) {
        decoded = decoded + 13 - 90 + 64;
        strToArr[i] = String.fromCharCode(decoded);
        continue;
      }
      decoded += 13;
      strToArr[i] = String.fromCharCode(decoded);
    } else {
      strToArr[i] = String.fromCharCode(decoded);
    }
  }

  str = strToArr.join("");
  return str;
}

rot13("SERR PBQR PNZC");
