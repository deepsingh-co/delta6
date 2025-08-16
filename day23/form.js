// let form  = document.querySelector("form");

// form.addEventListener("submit" , function(event){
//     event.preventDefault();
//     alert("form submitted");
// });


let form = document.querySelector("form");

form.addEventListener("submit" , function(event){
    event.preventDefault();

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");


    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value} , your Password is set to ${pass.value}`)
})