class Person
  {
  constractor()
  {
    this.name="";
    this.id="" 
  }
    printData()
    {
      console.log(this.name);
      console.log(this.id);
    }
  }

class Student extends Person
  {
    constructor()
    {
        super();
        this.faculty = "";
    }
    printData()
    {
        super.printData();
        console.log(this.faculty);
    }


  }

let p = new Person();
p.name = "ron"
p.id = 12

let s = new Student();
s.faculty = "Matematica"
s.id=14
s.name = "shahaf"
s.printData();


