/* 
#__ Higher order function __#
    -A HOF is a function that takes another function(s) as an argument(s) and/or returns a function to its callers. 
    -Function which take another function as an arguments is k/s HOF
    -wo function jo dusre function ko as an argument accept krta hai usa HOF kehte hai

#__ Callback function __#
    -A  CB function is function that is passed to another function with the expectation that the other function will call it.
    -Function which get passed as an argument to another function is k/s CBF
    -Jis v function ko hm kisi or function ke under as an argument passed krte hai then usko hm callback function bolte hai
*/
  
//We need to create a calculator

const add = (a,b) =>{
    return a+b;
}
const sub = (a,b) =>{
    return a-b;
}
const mul = (a,b) =>{
    return a*b;
}

const calculator = (num1 , num2 ,operator) =>{
    return operator(num1 ,num2)
}
console.log(calculator(10,2,add))
console.log(calculator(10,2,sub))
console.log(calculator(10,2,mul))