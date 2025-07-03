const max = prompt("Enter the maxium number");
let random = Math.floor(Math.random()*max)+1;
let guess = prompt("Guess the number");
while(true){
    if(guess == 0){
        console.log("You Are quiting the game");
        break;
    }else if(guess == random){
        console.log("You Guess the right number , Congrates!! Random number is " ,random);
        break;

    }else if(guess<random){
        guess = prompt("Hint: Your guess is too small , try again")
    }
    else{
       guess= prompt("Hint: Your guess is to large , try again");
    }
    
    }