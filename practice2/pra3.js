class Person
{
    constructor(n="Shahaf",a)
    {
        this.name=n;
        this.age=a;
    }
    printData()
    {
        console.log("------------------");
        console.log(this.name);
        console.log(this.age);
        console.log("------------------");
    }

    printBirthYear(currentYear)
    {
        console.log(currentYear-this.age);
    }

    getBirthYear(currentYear)
    {
        return currentYear-this.age;
    }

}
//------ main --------

let p1 = new Person();
console.log(p1.name);
console.log(p1.age);
p1.age = 20; 
console.log(p1.age);
p1.printData();
p1.printBirthYear(2024)
let year = p1.getBirthYear(2025);
console.log(year);
let p2 = new Person("Dana",27);
arr = [p1,p2];
for(let i = 0 ; i<arr.length; i++)
{
    arr[i].printData();
}







