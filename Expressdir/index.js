const express = require("express");
const app = express();

let port = 3000;

app.listen(port , () => {
    console.log(`The App is listening on port ${port}`)
});

//controal + c is used to stop server

//app.use((req , res) => {
    console.log("Request received");
    res.send("This is a basic response")
//});

app.get("/" ,(req , res) =>{
    res.send("This is root path");
});

app.get("/love" ,(req , res) =>{
    res.send("I love you Madam ji");
});

app.get("/hate" ,(req , res) =>{
    res.send("i Hate love story");
});

app.get("*" ,(req , res) =>{
    res.send("Not interest in other girl")
})