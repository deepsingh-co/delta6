//Constructors - Doesn't return anything , used with 'new' keyword

function Person(name , age){
    this.name = name;
    this.age = age;
    console.log(this);
}

Person.prototype.talk = function(){
    console.log(`Hello , my name is ${this.name} and I am ${this.age} years old.`);
};

let p1 = new Person("Anurudh" , 21);
let p2 = new Person("Komal" , 21);


// cLASSES  is a templet  for creating objects with similar properties and methods

class Person1 {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hello , my name is ${this.name} and I am ${this.age} years old.`);
    }   
}