let jsonRes = '{"fact":"Deep singh one day you will get what you want.","length":15}';

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);



let url = "https://farzi-vichar-api.vercel.app/language/hindi/random";

fetch(url)
.then((Response) =>{
    console.log(Response);
    return Response.json();
    })
    .then((data) =>{
        console.log(data.content);
    })
.catch((err) =>{
    console.log("ERROR -" , err);
})
