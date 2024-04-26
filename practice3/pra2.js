
// Option 4 

function funcA(num)
{
    return new Promise(resolve => 
        {
            setTimeout(() => resolve(num*2),2000)
        });
}


// async-await 
async function funcB(){
   let data = await funcA(4);
   console.log(data);
}

funcB();
console.log("End Task!")
