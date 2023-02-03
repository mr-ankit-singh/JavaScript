/*
#__ synchronous JavaScript __#

    -As the name suggests synchronous means to be in a sequence, 
    -i.e. every statement of the code gets executed one by one. 
    -So, basically a statement has to wait for the earlier statement to get executed.

*/

const fun2 = () => {
    console.log('Function 2 is called')
}
const fun1 = () => {
    console.log('Function 1 is called')
    fun2()
    console.log('One by one execution')
}
fun1()