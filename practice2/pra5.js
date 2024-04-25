
arr = [3,6,9,32,5];

console.log("Befor: " + arr);
arr.forEach(element => console.log(element*2));
let x = arr.forEach(element => element*2);
let t = arr.map(element=>element*2);
console.log("After: " + t);
console.log("After: " + x);

console.log("--------------------------");
let arr2 = arr.filter(x => x > 5);
console.log("filter: "+ arr2);

console.log("--------------------------");
let array1 = [{id : 204, name : "shahaf"}, {id : 172 ,name : "shir"}];
let array = array1.filter(a => a.id==204);
console.log("filter: " , array);

let obj1 = array1.find(a => a.id == 204);
console.log("find: " , obj1);



numbers = [4,5,7,22,3,12,18,14];
console.log("numbers array: ", numbers);
console.log("Multiplication of all numbers: ", numbers.reduce((x,y) =>x*y));
console.log("The sum of all the numbers: ", numbers.reduce((x,y) =>x+y));
console.log("min number: ", numbers.reduce((x,y) => x<y ? x:y));
console.log("max number: ", numbers.reduce((x,y) => x>y ? x:y));

