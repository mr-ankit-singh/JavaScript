/*
#__ Destructuring in ES6 __#

  -The destructuring assignment syntax is a Javascript expression that make it possible to unpack value from arrays,
  -or properties from object ,into dictinct variables.

*/

// Array Destructuring 🙋‍♂️

const myBioData = ['ankit' , 'singh' , 20];
//Normal mtd to excess array element
var Fname=myBioData[0]
var Lname=myBioData[1]
var age=myBioData[2]
console.log(`My name is ${Fname} ${Lname} amd i am ${age} year old`)

// By array destructuring
var [Fname ,Lname ,age] = myBioData;
console.log(age);

// we can add value too
var [Fname ,Lname ,age ,myDegree="Btech"] = myBioData;
console.log(myDegree);

//By using spread operator
let fruits = ['apple' , 'mango' , 'orange' , 'banana' , 'guavava']
let [fruit1 , fruit2, ...restFruits] = fruits;
console.log(`Fruit1 : ${fruit1}`, typeof(fruit1))   // return string type
console.log(`Fruit2 : ${fruit2}`, typeof(fruit2))   // return string type
console.log(`restFruits : ${restFruits}`, typeof(restFruit)) //return undefine type


// Object Destructuring 🙋‍♂️
const bioData = {
    Fname : 'Ankit',
    Lname : 'Singh',
    age : 20
}
console.log(bioData.age)
var {Fname ,Lname ,age ,myDegree="Btech"} = bioData;
console.log(myDegree);