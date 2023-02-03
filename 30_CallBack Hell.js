/*
#__ CallBack Hell __#

  -JavaScript provides an easy way of escaping from a callback hell. 
  -This is done by event queue and promises.

*/
setTimeout (() => {
    console.log(`1 work is done`);
    setTimeout (() => {
        console.log(`2 work is done`);
        setTimeout (() => {
            console.log(`3 work is done`);
            setTimeout (() => {
                console.log(`4 work is done`);
                setTimeout (() => {
                    console.log(`5 work is done`);
                    setTimeout (() => {
                        console.log(`6 work is done`);
                    } , 1000)
                } , 1000)
            } , 1000)
        } , 1000)
    } , 1000)
} , 1000)