/*
#__Scope chain and Lexical scope __#

   - The scope chain is used to resolve the value of variable name iv JS
   - Scope chain in javascript is laxically defined which means that we can see what the scope chain will be by lookin at the code
   - At the top we have the Global scope , which is the window object in the browser
   - Lexical scoping means Now the inner function can get access to their parent function variables .
   - But vice-versa is not true.
 
*/
let a = 'hello Guys'; // global scope
const first = () =>{
    let b = 'How are you  ?';

        const second = () =>{
            let c = 'HII , I am fine Thanku'
            console.log(a+b+c)
        }
        second()
}
first()