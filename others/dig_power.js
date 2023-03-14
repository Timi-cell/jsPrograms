function digPow(num, pow) {
  // convert the number into a string
  let stringedNumber = num.toString();
  let result = 0;
  for (let i = 0; i < stringedNumber.length; i++) {
    result += parseInt(stringedNumber[i]) ** (pow + i);
  }

  let dividedValue = result / num;
  // check if the number is an integer and pass the neccessary values
  if (!Number.isInteger(dividedValue)) {
    return -1;
  } else {
    return dividedValue;
  }
}

console.log(digPow(46288, 3));
