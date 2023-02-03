/*
#__ Switch Statements __#

   -The switch statement is used to perform different actions based on different conditions.

   + The JavaScript Switch Statement
      -Use the switch statement to select one of many code blocks to be executed.

   - Syntax:
      switch(expression) {
       case x:
         // code block
         break;
       case y:
         // code block
         break;
       default:
        // code block
      }

*/ 

var area = "circle"
var PI = 3.142 , l=10, b=20, r=3;

switch(area){
    case 'circle':
        console.log("The area of circle is: " + PI * r ** 2)
        break
    
    case 'rectange':
        console.log("The area of rectangle is: " + (l*b))
        break

    case 'square':
        console.log("The area of square is: " + (l*b))
        break

    case 'triangle':
        console.log("The area of triangle is: " + (l*b)/2)
        break
    
    default:
        console.log("Choose correct option")
}