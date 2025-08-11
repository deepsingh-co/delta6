let btn = document.querySelector("button");
console.log(btn);

btn.onclick = function(){
    console.log('Button was Clicked');
}


let btns = document.querySelectorAll("button");

for( btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = function (){
        console.log("You Entered a button");
    };
    console.dir(btn);
}

function sayHello(){
    alert("Hello");
}