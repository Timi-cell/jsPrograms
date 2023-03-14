/*
write two functions, reverseArray and reverseArrayInPlace. 
1. The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order. 
2. The second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the
standard reverse method.
*/
const reverseArray = (array) => {
  // reverse the given array
  let newArray = [];
  for (let el of array) newArray.unshift(el);
  return newArray;
};

console.log(reverseArray(["A", "B", "C"]));

// what replaces array.reverse()
const reverseArrayInPlace = (array) => {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
};

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
