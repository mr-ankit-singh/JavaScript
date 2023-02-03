/*
#__ If..Else __#

   + In JavaScript we have the following conditional statements:
      - Use if to specify a block of code to be executed, if a specified condition is true
      - Use else to specify a block of code to be executed, if the same condition is false
      - Use else if to specify a new condition to test, if the first condition is false

  + Syntax
      if (condition1){
          
      } 
      else if (condition2){
          
      } 
      else{
          
      }

*/

var tomorrow = 'rain';
if(tomorrow == 'rain'){
    console.log("Wear rain coat");
}
else{
    console.log("No need to wear rain coat");
}


// Write a program thats works whether if a given year is leap year or not ?
var year = 2020
if( year % 4 === 0){
    if(year % 100 === 0){
            if(year % 400 === 0){
                console.log("The year "+ year +" is a leap year" )
            }else{
                console.log("The year "+ year +" is not a leap year" )
            }
    }else{
        console.log("The year "+ year +" is  a leap year" )
    }
}else{
    console.log("The year "+ year +" is not a leap year" )
}

// What is truthy and falsy in javascript ?
// we have total 5 falsy value in javascript
// --> 0 , "" ,undefine ,null ,NaN ,false is false anyway

 if (score = 0){ // yeha per if condition me hm false value diya hai esliya woh else per chala jyega
     console.log("yah we won the game")
 }
 else{
     console.log("omg we loose the game")
 }

 // if me hm true value diya hai
 
 if (true){ 
    console.log("yah we won the game")
}
else{
    console.log("omg we loose the game")
}