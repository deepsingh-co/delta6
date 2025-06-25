let pencilPrice = 10;
let bookPrice = 45;
let totalPrice = "The total price is: " + (pencilPrice + bookPrice) +"Rupess";
console.log(totalPrice);

 //Question 1 
let num = 50;
if (num%10==0) {
    console.log("good")
    
}else{
    console.log("bad")
}

//Question no 2
let name = prompt("Enter your name: ");
let age = prompt("Enter your age: ");
let you = `${name} is ${age} year old`;
alert(you);

// Question no 3

let quarter = 4;
switch (quarter){
    case 1 :
        console.log(`January , February , march `);
        break;
    case 2 :
        console.log(`April , may ,June `);
        break;
    case 3 :
        console.log(`July , Auguest < September `);
        break;
    case 4 :
        console.log(`October, November ,December `);
        break;
    
}

// question no 4
let name1 = "khushi";

if((name1[0]=='a'|| name1[0] == 'A') && (name1.length>=5)){
    console.log("Its is a Golden String")
}else{
    console.log("Its is not a golden string")
}

//Quetion no 5

let num1 = 455;
let num2 = 56;
let num3 = 4284;
if(num1 >= num2 && num2>= num3){
    console.log(`Largest number is : ${num1}`)
}else if(num2>= num3){
    console.log(`Largest number is : ${num2}`)

}else{
    console.log(`Largest number is : ${num3}`)

}

//question no 6
let number1 = 35;
let number2 = 4785;

if ((number1 % 10) == (number2 % 10)) {
    console.log("Number have the same digit which is",number1%10);
    
}else{
    console.log("number don't have the same digit");
}



    


