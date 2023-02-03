/*
#__ For loops in JavaScript __#

   + JavaScript supports different kinds of loops:
     - for    : loops through a block of code a number of times
     - for/in : loops through the properties of an object
     - for/of : loops through the values of an iterable object

   + The For Loop
      -Syntax:
        for (initializer ; condition ; iteration) {
          // code block to be executed
        }
        
   + The For/In Loop
     -The JavaScript for/in statement loops through the properties of an Object:
     -Syntax:
        for (key in object) {
          // code block to be executed
        }

   + The For/Of Loop
      -The JavaScript for/of statement loops through the values of an iterable object.
      -It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
      -Syntax
        for (variable of iterable) {
          // code block to be executed
        }

*/

var myFriends = ["Ankit", "Sophia" , "Khushi" , true ,98];

// Use for loop to navigate

for(var i=0 ; i<myFriends.length;i++){
    console.log(myFriends[i])
}

// Use for/in loop to navigate
// for-in loop hma elements ka index number deta hai


var myFriends = ["Ankit", "Sophia" , "Khushi" , true ,98];
for(let elements in myFriends){
    console.log(elements)
}

//Use for/of loop to navigate
//for-of loop hma list ke elements show kerta hai


var myFriends = ["Ankit", "Sophia" , "Khushi" , true ,98];
for(let elements of myFriends){
    console.log(elements)
}


//example
for( var num =0 ;num<=10 ; num++){
    console.log(num)
}

