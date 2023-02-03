/* 
#__ Differeence between let ,const and var __#
             
   - var ==> Function scoped and let and const ==> Blocked scoped.
   - All of them are hoisted but let and const have temporal dead zone.
   - var can be redeclared in same scope but this cannot be done with let and const.
   - var and let can be updated but const can't be updated.

   Note : A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible 
   until the moment the computer completely initializes it with a value. 
*/

// Variables declared with the let keyword can have Block Scope.
let myName ="Jasmine singh"
console.log(myName)
myName = "Rose"
console.log(myName)

// Function block
function biodata(){
    var myFirstName = "Jasmine"
    console.log(myFirstName)
    if(true){
        var myLastName = "Singh"
        console.log('Inner ' + myLastName)
        console.log('Inner ' + myFirstName)
    }
    console.log('InnerOuter ' + myLastName)
}
biodata();

// Bloke block
//The let keyword allows you to declare a variable with block scope.
function biodata(){
    let myFirstName = "Jasmine"
    console.log(myFirstName)
    if(true){
        let myLastName = "Singh"
        console.log('Inner ' + myLastName)
        console.log('Inner ' + myFirstName)
    }
    // console.log('InnerOuter ' + myLastName) //show error because myLastName is block contant
}
biodata();

/*
JavaScript const
    -The const keyword allows you to declare a constant (a JavaScript variable with a constant value).
    -Constants are similar to let variables, except that the value cannot be changed.

*/
function biodata(){
    let myFirstName = "Jasmine"
    console.log(myFirstName)
    //show error because myLastName is block contant
}
console.log(myFirstName)//show error because myFirstName is block contant
biodata();
