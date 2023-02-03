/* 
#__Types of operator in Javascript __#

    -Arithmatic operator ( + , - , * , /)
    -Assignment operator (= , += , -= , *= , /=)
    -Increment and Decrement operator ( x++ , ++x , x-- , --x)
    -Comparision operator ( == , < , > , >= , <=)
    -Logical operator ( && , || , ! )
    -String operator
    -Conditional(ternary) operator

*/
// Assignment operator
// The assignment operator (=) assigns a value to a variable.
var x = 5;
var y = 6;
var z = 5;
console.log("Is both the x and y are equal " + x == y);
console.log("Is both the x and y are equal " + x == z); // return false...?
// We will see this mtd in es6
console.log(`Is both the x and y are equal : ${x == y}`);
console.log(`Is both the x and z are equal : ${x == z}`);


// Comparision operator
console.log(10 ==12);
console.log(10 != 20 );

// String (concatenation) operator
console.log("Hello world");
console.log("Hello " + "world");


/*---------------- Challange Time ------------*/

// 1) What will be the output of 3**3
// Note : (**) is an exponential operator
console.log(3**3)

// 2) What will be output when we add number and a string
console.log(10 + "singh")

// 3)write a program to swap two number
var a=5
var b=10
var temp
console.log("After swapping")
console.log("a= "+ a + " b= " + b)
temp=a
a=b
b=temp
console.log("Before swapping")
console.log("a= "+ a + " b= " + b)

// 4)Program to swap two number without using third variable
var a=5
var b=10
console.log("After swapping")
console.log("a= "+ a + " b= " + b)
a = a+b
b = a-b
a = a-b
console.log("Before swapping")
console.log("a= "+ a + " b= " + b)