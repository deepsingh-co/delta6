//ARRAY METHOD

let arr =[1,2,3,4,5];

arr.forEach(function(el){
    console.log(el);
});

let print = function(el){
    console.log(el);
};

arr.forEach(print);

let arrs = [{
    name:"Anurudh",
    age:21,
},{
    name: "Komal",
    age:20,
},{
    name:"Anshika",
    age:20,
},];

arrs.forEach((student) =>{
    console.log(student.age);
},);

//MAP AND FILTER

let num = [1,2,3,4];

let double = num.map((el) =>{
    return el *el;
});