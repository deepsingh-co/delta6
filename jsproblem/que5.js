let number =[2,54,24,5,55,,85,9,97,57,32,42,,41];
let largest = 0;

for(let i=0;i<=number.length;i++){
    if(largest<number[i]){
         largest = number[i];
    }

}
console.log(largest);