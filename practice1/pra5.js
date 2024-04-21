

// Some method in list:

let arr = [2,5,71,63,51];
console.log("Add item(5) to the ens of the list:")
console.log("Before :",arr);
arr.push(5);
console.log("After :",arr);
console.log("\n");

console.log("Remove item from the end of the list:")
console.log("Before :",arr);
arr.pop();
console.log("After :",arr);
console.log("\n");

console.log("Remove item from any index we want (for example remove 71):")
console.log("Before :",arr);
// Find the index of the element you want to remove
let indexToRemove = arr.indexOf(71);
console.log(indexToRemove);
arr.splice(indexToRemove, 1);
console.log("After :",arr);
console.log("\n");

  



