const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine" , "ejs");

app.set("views" , path.join(__dirname,"/views"));

app.get("/", (req , res)=>{
    res.render("home.ejs");
});

app.get("/rolldics" , (req , res) => {
    let diceVal = Math.floor(Math.random() * 6) +1;
    res.render("rolldics.ejs" , {diceVal});
});




app.get("/ig/:username" , (req , res) =>{
    let{username} = req.params;
    res.render("instagram.ejs" , {username})
})



app.listen(port , () =>{
    console.log(`Listening on port ${port}`)
});
//app.listen(port , () =>{
 //   console.log(`Listening on port ${port}`)
//});


