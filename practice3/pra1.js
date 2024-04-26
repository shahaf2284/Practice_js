
let prom = new Promise((resolve) =>
    {
        setTimeout( () => resolve("ok") ,1000);
    })

// f = data => console.log(data);
// prom.then(f);

//Some running code...

// console.log("End")

// option 2

function someFunc(num)
{
    return new Promise(resolve => 
        {
            setTimeout(() => resolve(num*2),2000)
        })
}
// someFunc(10).then(data =>console.log(data))
// console.log("End Task!")

//  option 3

function funcA(num)
{
    return new Promise(resolve => 
        {
            setTimeout(() => resolve(num*2),2000)
        });
}


function funcB(){
    funcA(4).then(data=>console.log(data)); 
}

funcB();
console.log("End Task!")





