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

let nums =[1,2,3,4,5,6,7,8,9,10,12,13];
let ans = nums.filter((el)=> {
    return el % 2 ==0;  //Even->true , odd->false
});


//EVWRY AND SUM

let check = [2,4,6].every((el) => el%2 ==0);

//REDUCE METHOD

let number = [1,2,3,4];
let finalNum = num.reduce((res ,el)=>res+el);
console.log(finalNum);

//MAXIMUM IN ARRAY8

let maxNum = [1,2,5,3,56,5,96,85,46,2];
let max =maxNum.reduce((max, el)=>{
    if (max<el) {
        return el;
    
    }else{
        return max;
    }
});

//PRACTICE QUESTION
function getMin(numbers){
    let min = numbers.reduce((min , el) =>{
        if (min <el) {
            return min;
        }else{
            return el;
        }
    });
    return min;
}

let numbers =[5,2,65,95,2];
console.log(numbers);
