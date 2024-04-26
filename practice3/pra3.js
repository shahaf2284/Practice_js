
function funcA(num)
{
  return new Promise(resolve =>
    {
        setTimeout( () => resolve(num*2) ,2000)
    })
}

//Option 1
/*
function funcB()
{
  return new Promise(resolve =>
    {
      funcA(4).then(data => resolve(data))
    })
}
*/


//Option 2 - async-await
async function funcC()
{
  let data = await funcA(4)
  return data;
}

funcC().then(data => console.log(data))

console.log("End")



