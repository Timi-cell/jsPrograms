/*
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height.
*/

// 0 for space , 1 for # and so on
// OR odd for space and even for #

let size = 8;
let output = "";

for (let i = 0; i < size; i++) {
  // this code will run 8times before i = 1 and it continues like that...
  for (let j = 0; j < size; j++) {
    (i + j) % 2 == 0 ? (output += " ") : (output += "#");
  }
  output += "\n";
}

console.log(output);
