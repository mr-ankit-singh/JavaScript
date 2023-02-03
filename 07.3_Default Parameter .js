/*
#__ Default Parameter __#

   -Default function parameter allow needs parameters  to be initialized 
    with default value if no value or undefine is passed.
    
*/

function mult(a, b=5){ //yeha per default set ker diya hai b ko
  return a*b 
}
console.log(mult(6))