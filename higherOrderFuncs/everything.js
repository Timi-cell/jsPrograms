/*
Analogous to the some method, arrays also have an every method. This one
returns true when the given function returns true for every element in the array.
In a way, some is a version of the || operator that acts on arrays, and every is
like the && operator.

Implement every as a function that takes an array and a predicate function
as parameters. Write two versions, one using a loop and one using the some
method.
*/

// the one using a loop --> Version 1

const every = (array, test) => {
  let [trueBox, falseBox] = [0, 0];
  for (let i of array) if (!test(i)) falseBox++;
  trueBox++;
  return falseBox > 0 ? false : true;
};
/* OR (Version 1)

function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}
*/

// the one using the some method --> Version 2
// the some method will keep running till it finds true;
const every2 = (array, test) => {
  return !array.some((n) => !test(n));
};

console.log(every([1, 3, 5], (n) => n < 10));
console.log(every([2, 4, 16], (n) => n < 10));
console.log(every([], (n) => n < 10));
