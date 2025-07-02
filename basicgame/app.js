let favMovie = "shiddat";
let guess = prompt("Guess my fav movie ?");
while(guess !=favMovie){
    if (guess == quit) {
        console.log("you quit");
        break;
        
    }
     guess=prompt("wrong guess , please try again");
}
if(guess==favMovie){
    console.log("congrates");
}