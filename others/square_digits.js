function squareDigits(number) {
  // convert the number into a string.
  let stringedNumber = number.toString();
  let str = "";
  // run a for loop on the converted number.
  for (let i = 0; i < stringedNumber.length; i++) {
    let result = (parseInt(stringedNumber[i]) ** 2).toString();
    // concatenate the strings together.
    str = str.concat(result);
  }
  // convert the string back into a number.
  return parseInt(str);
}

console.log(squareDigits(24));

/*

if num -> 25

RESULT -> 425

*/

