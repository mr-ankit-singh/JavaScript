/*
#__ While Loop in JavaScript __#

   - Loops can execute a block of code as long as a specified condition is true.

   + The While Loop
      -The while loop loops through a block of code as long as a specified condition is true.

   - Syntax:
        while (condition) {
            // code block to be executed
        }
*/

var num = 0
//block scope
while (num <= 10) {
    console.log(num)
    num++
}