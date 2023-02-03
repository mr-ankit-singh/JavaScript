/*
#__Closure in Javascript__#

    A closure is a function having access to the parent scope, even after the parent function has closed.
    -A closure is the combination of a function bundled together (enclosed) with references to its surrounding state 
     (the lexical environment). 
    -In other words, a closure gives you access to an outer function’s scope from an inner function. 
    -In JavaScript, closures are created every time a function is created, at function creation time
*/

const outerFun = (a) =>{
    let b = 10
    const innerFun = () =>{
        let sum = a+b
        console.log(`The sum of a nd n is ${sum}`)
    }
    innerFun()
}
outerFun(10)