

//Ex 1

console.log("-------------------------------------\n");
console.log("1.     Create a function that receives 2 numbers and print their sum.");

function add(num1, num2)
{
    console.log(num1+num2);
}
add(3,5);

console.log("-------------------------------------\n");
console.log("2.     Create a function that receives 2 strings and print the longer of them.");

function longestString(str1, str2)
{
    if(str1.length > str2.length)
    {
        console.log(str1);
    }
    else if (str1.length=str2.length)
    {
        console.log("Both strings are the same size:\n" + str1 + "\n" + str2);
    }
    else
    {
        console.log(str2);
    }
}
longestString("dan","yos")

console.log("-------------------------------------\n");
console.log("3.     Create a function that receives an array of Booleans and print that amount of true occurrences.");

function calculateBol(arr)
{
    counter=0;
    for(let i=0; i<arr.length;i++)
    {
        if(arr[i]){
            counter++;
        }
        else{
            continue;
        }
    }
    console.log(counter);
}

array = [true, true, false, true];
calculateBol(array);

console.log("-------------------------------------\n");
console.log("4.     Create a function that get an array of numbers and print their multiply.");

Temp=1;
function arrMul(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        Temp *= arr[i];
    }
console.log(Temp);
}
arrMul([2,5,3]);

console.log("-------------------------------------\n");
console.log("5.     Create a function that receive 3 numbers and returns their multiply.");

function mulNums(num1,num2,num3)
{
    return num1*num2*num3;
}
console.log(mulNums(2,4,6));

console.log("-------------------------------------\n");
console.log("6.     Create a function that receives 2 strings and returns the length of the shorter one.");

function strL(str1,str2)
{
    if(str1.length > str2.length)
    {
        return str1;
    }
    else if (str1.length=str2.length)
    {
        return "Both strings are the same size";
    }
    else
    {
        return str1;
    }
}
console.log(strL("shahaf","shahaf")+"\n");

console.log("-------------------------------------\n");
console.log("7.     Create a function that receives 2 numbers and Boolean. If the sum of the numbers is");
console.log("       greater than 10 – returns the Boolean value. Other wise – returns the opposite value. ")

function Some(num1,num2,bool)
{
    if(num1+num2>10)
    {
        return bool;
    }
    else
    {
        return -(num1+num2)
    }
}

console.log(Some(2,4,true));

console.log("-------------------------------------\n");
console.log("8.     Create a function that get a number(N) and return an array of numbers containing the numbers : 1,2,3… N \n");

function Fuc(N)
{
    arr=[];
    for(let i=0;i <N;i++)
    {
        arr.push(i+1);
    }
    return arr;
}
console.log(Fuc(30));

console.log("-------------------------------------\n");
console.log("9.     Create a function that Receives 2 numbers and send their multiply to ONTHER");
console.log("       function that print it \n");

function print(sum)
{
    console.log(sum);
}
function mul2Num(num1,num2)
{
    print(num1*num2);
}

mul2Num(2,7);

console.log("-------------------------------------\n");
console.log("10.    Create a function that receives an array of int and returns the number of values that")
console.log("       greater than 5  \n");

function grater5(arr)
{
    // console.log(arr.length);
    temp= [];
    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
        if(arr[i]>5)
        {
            temp.push(arr[i]);
        }
        else 
        {
            continue;
        }
    }
    return temp;
}

arr= [2,4,7,4,9,3,8];
console.log("Befor: " + arr)
console.log("Afret " + grater5(arr));















