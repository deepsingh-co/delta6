const sqr =(n)=> n*n;

let id = setInterval(()=>{
    console.log("Hello Anurudh");
},2000);

setTimeout(()=>{
    clearInterval(id);
},10000);


const averageArr=(arr)=>{
    let total =0;
    for(let number of arr){
        total+=number;
    }
    return total /arr.length;
};
let arr= [5,6,8,10,1];
console.log(averageArr(arr));


let num =4;
const isEven=(num)=> num%2==0;