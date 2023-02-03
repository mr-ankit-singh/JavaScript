/*

1)Difference Between Undefined and Null
  -undefined and null are equal in value but different in type:
    -typeof undefined           // undefined
    -typeof null                // object

2) What is NaN
   -NaN is a property of global object
   -In other word , it is a variable in global scope
   -The initial value of NaN is Not-A-Number
*/
var myPhonenumber = 9876543210;
var name = 'Ankit'
 //check kiya gya hai ki aap number enter ker reha hai ki nahi
console.log(isNaN(myPhonenumber)); // return false bcz phoneno. is a number
console.log(isNaN(name)); // return true bcz name is not a number