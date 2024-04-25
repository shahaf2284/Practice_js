
console.log("\n------------------Task 1---------------------\n")
// 1. You have the following list : ["Yaron","Dov","Gilat","Dana"]
// User map,filter & reduce to calculate the total length of the names with more than 4 chars

let f1 = (arr) =>
{
    array = arr.filter(element => element.length > 4);
    newarr = array.map(x=>x.length);
    return newarr.reduce((x,y)=>x+y);
}

let f2 = (arr) =>
{
    array = arr.filter(element => element.length > 4);
    return array.reduce((x,y)=> x.length + y.length);
}

arr = ["Yaron","Dov","Gilat","Dana"];
// Option 1 
console.log("Option 1 include filter & map & reduce : ",f1(arr));
// Option 2 
console.log("Option 2 include filter & reduce : ", f2(arr));

console.log("\n------------------Task 2---------------------\n");

// 2. You have the following list : [{name : "Avi", age:20},{name : "Ron", age:30},{name : "Dana", age:25}]
// - Print the names of those who are 22-32 years old
// - Get their names length

let f3 = (a) =>
{
    let b = a.filter((elem) => elem.age >= 22 && elem.age <= 32);
    b.forEach(elem => console.log(elem.name,"has length : ",elem.name.length));
}


let list2 = [{name : "Avi", age:20},{name : "Ron", age:30},{name : "Dana", age:25},{name : "yosi", age: 22}, {name : "itay", age: 33}];
// console.log(f3(list2));
f3(list2)

console.log("\n------------------Task 3---------------------\n");

// 3. You have the following array of arrays : [[1,6,3,9],[6,12,5,21],[4,11,23,1]]
// Calculate the total sum of the numbers. Use forEach only.


nums = [[1,6,3,9],[6,12,5,21],[4,11,23,1]];
temp = [];
nums.forEach(element => {
                        temp.push(element.reduce((x,y)=>x+y));
                        });
// console.log(temp);
console.log(temp.reduce((x,y)=>x+y));
















