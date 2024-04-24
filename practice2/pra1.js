



let obj = {     name : "shahaf",
                 age : 29,
                geades : [90,64,67,91],
                 address : 
                {
                city :"Beer Seva",
                street: { name : "avia hasofet", number : 10}   
                } 
            }

console.log(obj.name);
console.log(obj.age);
console.log(obj.address.city);
console.log(obj.address.street.name);
obj.name = "yosi"
console.log(obj.name);
console.log(obj.geades[1]);
console.log("----------------------------------------")
arr = [ {name : "shahaf", age : 29}, {name : "Dana", age: 23} ];
console.log(arr[1].name);
console.log(arr[1].age);
console.log("--------------------------------------------------")

let f = (Name, Age) => 
 {
    return {name : Name , age: Age};
 }
arr.push(f("shir",41));
console.log(arr[2].name);
console.log(arr[2].age);
console.log(arr);
console.log("--------------------------------------------------")



