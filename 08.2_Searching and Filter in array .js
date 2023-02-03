//#__ Searching and Filter in an array __#

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/

let myarray = ["Ankit", "is", "a", "good", "boy", "good", "boy"]
// 1) length():length of array
console.log(myarray.length)

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/

// 2) Finding a element in a array

/* The indexOf() method returns the index of (the position of) the first occurrence 
  of a specified text in a string */
console.log(myarray.indexOf("good"))
//last index of array
console.log(myarray.lastIndexOf("good"))

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/

// 3) include in array
console.log(myarray.includes("good"))

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/

// 4) slice():slice a array
// startIndex => Include  endIndex => Exclude
console.log(myarray.slice(0,3))
console.log(myarray)

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/

// 5) replace():replace a array
myarray[0]=("Mr_A")
console.log(myarray)

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/

// 6) Find in array
// Array.prototype.find() 🙋‍♂️
// arr.find(callback(element[, index[, array]])[, thisArg])

// Returns the found element in the array, if some element in the 
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

const prices = [200,300,350,400,450,500,600];

// price < 400
const findElem = prices.find((currVal) =>  currVal < 400 );
console.log(findElem);

console.log(  prices.find((currVal) => currVal > 1400 ));

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/

//7) Array.prototype.findIndex() 🙋‍♂️
// Returns the found index in the array, if an element in the 
// array satisfies the testing function, or -1 if not found.
console.log(  prices.findIndex((currVal) => currVal > 1400 )  );

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/

// 8) Array.prototype.filter() 🙋‍♂️

// Returns a new array containing all elements of the calling 
// array for which the provided filtering function returns true.

const prices1 = [200,300,350,400,450,500,600];

// price < 400
const newPriceTag = prices1.filter((elem, index) => {
  return elem < 400;
})
console.log(newPriceTag);
console.log(prices1);

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/

// Array Subsection 3 👉 How to sort an Array

// Array.prototype.sort() 🙋‍♂️

// The sort() method sorts the elements of an array in place and 
//returns the sorted array. The default sort order is ascending, built 
//upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.

const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];

console.log(months.sort());

const array1 = [1, 30, 4, 21, 100000, 99];
console.log(array1.sort());


// However, if numbers are sorted as strings, 
// "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incorrect 
// result when sorting numbers.






