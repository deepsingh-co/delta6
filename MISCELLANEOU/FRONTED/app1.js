class Person {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hello , my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name , age , marks){
        super(name , age);
        this.marks = this.marks
        }
    }

class Teacher extends Person {
    constructor(name , age , salary){
        super(name , age);
        this.salary = salary;
    }
}

let s1 = new Student("Anurudh" , 21 , 95);
let t1 = new Teacher("Komal" , 21 , 50000);
