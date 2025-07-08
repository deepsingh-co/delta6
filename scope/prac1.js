 //Write a JavaScript function that returns array elements larger than a number.


function larger(arr , num){
    for(let i=1;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }

}
let arr = [8,9,10,1,2,3,4,5,6,7];
let num =7;

larger(arr,num);

//Write a JavaScript function to extract unique characters from a string. 
//Example: str = “abcdabcdefgggh” ans = “abcdefgh”

let str = "abcdabcdfgggh";
function unique(str){
    let ans ="";
    for(let i=0;i<=str.length;i++){
        let check = str[i];
        if(ans.indexOf(check)==-1){
            ans+=check;
        }
}
return(ans);
}
unique(str);

//Write a JavaScript function that accepts a list of country names as input and 
//returns the longest country name as output. 
//Example : country = ["Australia", "Germany", "United States of America"] output : 
//"United States of America"

