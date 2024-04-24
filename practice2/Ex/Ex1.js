


console.log("----------Task 1-----------------------------")
let f = (arr) =>
        {
                let sum=0
                for(let i = 0; i < arr.length; i ++)
                {
                        sum += arr[i]; 
                }
                return sum/arr.length;
        } 

let obj = { 
        nums1 : [4,1,2,5] ,
        nums2 : [6,1,8,3] ,
        Student : {
                Name : "Avi",
                ID : 111111,
                Grades : {nums3 : [4,1,9,3]}
                }
        }
            

a = f(obj.nums1);
b = f(obj.Student.Grades.nums3);
if(a>b){console.log(a);}
else{console.log(b);}

console.log("----------Task 2-----------------------------")

arr = [ [ { num1 : 10 }, { num1 : 40 } ] , [ { num1 : 20 } ] ]

for(let i=0;i< arr.length;i++)
{
        for(let j = 0; j < arr[i].length; j++)
        {
        console.log(arr[i][j].num1)
        }
}

console.log("----------Task 3-----------------------------")

let f2 = (array, mobileP) =>
{
        for(let i=0; i<array.length; i++)
        {
                if(array[i].Phones.Mobile == mobileP){ return array[i].Name}
        }
}

arr3 = [{Name: "shahaf", Age: 29,
        Phones :{
                Mobile : "052-6332665",
                Home : "cahal",
                Fax : "2091"
        }},
        {Name: "zohar", Age: 19,
        Phones :{
                Mobile : "053-6332665",
                Home : "cal",
                Fax : "2191"
        }}
]

console.log(f2(arr3,"052-6332665"));


console.log("----------Task 4-----------------------------")
let f4 = (Name,Age,Phone) => 
 {
    return {name : Name , age : Age, phone : Phone};
 }

let f3 = (names, ages, phones) =>
        {
                arr=[]
                for(let i=0 ;i < names.length; i++)
                {
                        arr.push(f4(names[i],ages[i],phones[i]));
                }
                return arr;
        }

arrNames = ["yosi", "shir", "Dana"];
arrAges = [23,81,19];
arrPhones = ["052-6641","054-1245","053-8193"];
console.log(f3(arrNames,arrAges,arrPhones));





