let greet = function(){
    console.log("sorry");
}

function multigreet(fun , count){   // higher order function
    for(let i=1;i<=count;i++){
        fun();

    }
}

multigreet(greet ,10);


//Higher order function of a return a function

function oddOrEvenFactory(request){
    if(request =="odd"){
        let odd = function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }else if(request == "even"){
        let even = function(n){
            console.log(n%2==0);
        }
        return even;
    }else{
        console.log("Wrong Input");

    }
    

}
