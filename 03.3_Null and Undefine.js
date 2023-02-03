/*
 + Empty Values(undefine)
    -An empty value has nothing to do with undefined.
    -An empty string has both a legal value and a type.

 + Null
    -In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
    -Unfortunately, in JavaScript, the data type of null is an object.

 + Difference Between Undefined and Null
    -undefined and null are equal in value but different in type:
    -typeof undefined           // undefined
    -typeof null                // object

*/

// Undefine :jisko hm aise hi chhod deta hai kuch assign nahi krte
  var und;
  console.log(und);
  console.log(typeof(und))

// Null
  var n=null;
  console.log(n)
  console.log(typeof(n))  // return object datatype
