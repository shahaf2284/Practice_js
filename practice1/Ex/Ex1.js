
console.log("-----------------------------------");
console.log("1.   Calculate the sum of the first and the" );
console.log("     last values from this array : [5, 6, 2, 9, 12, 4]\n") ;

let arr = [5, 6, 2, 9, 12, 4];
let sum = arr[0]+arr[arr.length - 1];
console.log("The solotion is: ", sum);

console.log("-----------------------------------\n");
console.log("2.   In the following array , [5, 6, 2, 9, 12, 4], set the third");
console.log("     value to be the multiply of the first 2 values ( 2 will become 11 )\n");

arr[2] = arr[0]*arr[1];
console.log("The third element is: ",arr[2]);
console.log(arr);
console.log("-----------------------------------\n");
console.log("3.   Create an array of numbers and print their sum\n");

let array = [12, 4, 8, 6 ,12];
array.push(...arr)
console.log(array);
// let co = arr.concat(array);
// console.log(co);

console.log("-----------------------------------\n");
console.log("4.   Create an arrays of strings, and print the strings that their length is bigger than 4.\n");
let StringArr = ["Shahaf", "Zohar", "Alona", "Yosi", "Gold"];

console.log("All the name above the 4 length string:")
for(let i = 0; i < StringArr.length; i++)
{
    if(StringArr[i].length > 4)
    {
        console.log(StringArr[i]);
    }
    else
    {
        continue;
    }
}
console.log("-----------------------------------\n");

console.log("5.   Create an array of Booleans. Print the number of “True” values.\n");
BooleanList = [true, false, true, true, true, false];

let boolnum=0;
for(let i = 0; i < BooleanList.length; i++)
{
    if(BooleanList[i])
    {
        boolnum++;
    }
    else
    {
        continue;
    }
}
console.log("The number of True boolean Value: ", boolnum);

console.log("-----------------------------------\n");
console.log("6.   There is an array : [ [1, 6, 7] , [8, 3] , [ 2, 9, 5, 4 ] ]")
arr= [[1, 6, 7] , [8, 3] , [2, 9, 5, 4]];
console.log("****************************")
console.log("a.   Print all the numbers:")
for(let i = 0; i<arr.length; i++)
{
    for(let j=0; j<arr[i].length;j++)
    {
        console.log(arr[i][j]);
    }
}
console.log("****************************")
console.log("b.   Print the length of all inner arrays:")
for(i=0; i<arr.length;i++)
{
    console.log("The length of", i+1 ,"inner array is: ", arr[i].length);
}
console.log("****************************")
console.log("c.   Print all the numbers that between 4 and 8:")
for(let i=0; i<arr.length;i++)
{
    for(let j=0; j<arr[i].length;j++)
    {
        if((arr[i][j]>4) && (arr[i][j]<8))
        {
            console.log(arr[i][j]);
        }
        else
        {
            continue;
        }
    }
}

console.log("****************************")
console.log("c.   Print that total of all the numbers:")
sum=0;
for(let i=0; i<arr.length;i++)
{
    for(let j=0;j<arr[i].length;j++)
    {
        sum += arr[i][j];
    }
}
console.log("The Total of all the numebr: ", sum);



