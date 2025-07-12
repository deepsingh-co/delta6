const sum = (a,b) =>{
    console.log(a + b);
};

const cube = (n) =>{
    return n*n*n;
};

const pow = (a,b) =>{
    return a**b;
};

const mul =(a,b) => (a*b);


// This is inbuilt function used for time out for prit aur run the function.

console.log("hii there!!");
setTimeout(() => {
    console.log("Anurudh");
}, 3000);  // time in mini sec

console.log("welcome");

// this is 2 

let id = setInterval(() =>{
    console.log("Hello Anurudh");
},2000);

console.log(id);

// to stop this function call clearinterval(id) in termial


//Now this with arrow function

const student ={
    name :"Anurudh",
    marks: 95,
    prop: this,//global scope
    getName:function(){
        console.log(this);
        return this.name;
    },
    getMarks:()=> {
        console.log(this); //parent's scope -> window
        return this.marks;
    },
    getInfo1: function(){
        setTimeout(() =>{
            console.log(this);  //student
        },2000);
    },
    getInfo2: function(){
        setTimeout(function(){
            console.log(this); //window
    },2000);
    }
}