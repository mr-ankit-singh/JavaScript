/*
#__ Asynchronous JavaScript __#

   - JavaScript is a single-threaded programming language which means only one thing can happen at a time. 
   - That is, the JavaScript engine can only process one statement at a time in a single thread.

   - That’s where asynchronous JavaScript comes into play. Using asynchronous JavaScript (such as callbacks, promises, and 
     async/await),you can perform long network requests without blocking the main thread.
     
   - Functions running in parallel with other functions are called asynchronous

*/
const fun2 = () => {
  setTimeout( () => {
    console.log('Function 2 is called')
  } , 2000);
}
const fun1 = () => {
  console.log('Function 1 is called')
  fun2()
  console.log('Parallel execution') // yeh fun2() se phela execute ho jyega
}
fun1()