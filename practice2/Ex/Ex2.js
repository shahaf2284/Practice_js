
class Student
{
    constructor(max_grades)
    {
        this.name = "";
        this.age = 0;
        this.grades= [];
        this.maxgrades = max_grades;
    }
    GetPersonalData()
    {
        return this.name,this.age
    }
    GetAvg()
    {
        let sum = 0;
        for(let i =0; i < this.grades.length; i++)
        {
            sum += this.grades[i];
        }
        return sum/this.grades.length;
    }
    addGrade(grade)
    {
        if(this.grades.length<this.maxgrades)
        {   
            this.grades.push(grade);
        }
        else
        {
            console.log("there's no empty space in the array!")
        }
    }
}

let sudent = new Student(2);
sudent.addGrade(90);
sudent.addGrade(21);
console.log(sudent.GetAvg());
sudent.addGrade(34);





