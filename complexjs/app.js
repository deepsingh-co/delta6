// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two () + one ();
//     console.log(ans);
// }

// console.log("Calling function");
// three();


// callback hell

h1 = document.querySelector("h1");

function changeColor(color , delay , nextColorChange){
    setTimeout(() => {
        h1.style.color = color;
       if(nextColorChange) nextColorChange();
    }, delay);
}

changeColor("red",1000 ,() => {
    changeColor("yellow",1000 , () => {
        changeColor("orange" , 1000 , () =>{
            changeColor("pink" ,1000);
        })
    });
});


// setTimeout(() => 
//     h1.style.color ="red";
// } , 1000);


// setTimeout(() => {
//     h1.style.color ="yellow";
// } , 2000);

// setTimeout(() => {
//     h1.style.color ="pink";
// } , 3000);

// 
console.log("hello")

//SETTING UP FOR PROMISE

// function savetoDb(data , sucess , failure){
//     let internetspeed = Math.floor(Math.random() *10) +1;
//     if (internetspeed > 4){
//         sucess();
//     } else {
//         failure();
//     }
// }

// savetoDb(
//     "Anurudh Singh" , 
//     () => {
//     console.log("Your data was saved");
//     savetoDb("Deep Singh" , 
//         () => {
//             console.log("Success2: Data2Saved");
//     },() => {
//         console.log("Failure2: Weak connection");
//     });
//     },
//     () => {
//         console.log("Weak connection. Data not saved");
//     }
// );

//PROMISE IS OBJECT

function savetoDb(data ){    
    return  new Promise((resolve , rejected) =>{
        let internetspeed = Math.floor(Math.random() *10) +1;
        if(internetspeed > 4){
            resolve("Success : Data was saved");
        }else {
            rejected ("Failure : Weak connection");
        }
    });
}

// savetoDb ("Anurudh singh");