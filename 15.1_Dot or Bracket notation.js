/*
#__ Dot Notation and Bracket Notation __#

   -Used to access the element of object
   -Mainly we used both notation according to need and simplicity
   -Dot notation ka use hm tb krte hai jb hmers key single word ka ho
   -Bracket notation ka used tb hota hai jb key ek se jda work ka ho

   Note : By default jo key hoti hai woh string hi hoti hai
*/

let person = {
    firstName : "Ankit",
    "last name" : "Singh",
    age : 21,
};

//Access using dot notation
console.log(person.firstName)
// console.log(person.last name)  <-- create problem while accessing using dot notation
console.log(person.age)

//Access using bracket notation
console.log(person["firstName"])
console.log(person["last name"])  
console.log(person["age"])