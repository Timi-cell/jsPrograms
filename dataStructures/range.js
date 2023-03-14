// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

const range = (start, end) => {
  let array = [];
  for (let n = start; n <= end; n++) {
    array.push(n);
  }

  return array;
};

console.log(range(1, 5));

// write a sum function that takes an array of numbers and returns the sum of these numbers

const sum = (arr) => {
  let output = 0;
  for (let n of arr) output += n;
  return output;
};

console.log(sum(range(1, 10)));

/*
Modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].
*/
const modifyRange = (start, end, step = start < end ? 1 : -1) => {
  let array = [];
  if (step > 0) {
    for (let n = start; n <= end; n += step) {
      array.push(n);
    }
  } else {
    for (let n = start; n >= end; n += step) {
      array.push(n);
    }
  }

  return array;
};

console.log(modifyRange(1, 10, 2));
