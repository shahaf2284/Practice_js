

// Option1 

console.log("option 1");
let f1 = function(x,y)
{
    return x+y;
}
let sum = f1(4,7);
console.log(sum);

// Option 2

console.log("option 2");
let f2 = (x,y) => x+y;
console.log(f2(3,6)); 

// Option 3

console.log("option 3");

let f3 = (x,y) => 
        {
            if(x+y>10)
            {
                return x+y;
            }
            else
            {
                return x*y;
            }
        }
console.log(f3(3,6));

