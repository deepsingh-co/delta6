let num =[1,2,3,4,5,6,2,3];
let check =2;


for(let i =0;i<=num.length;i++){
    if(num[i]==check){
        num.splice(i , 1);
    }
}
console.log(num);