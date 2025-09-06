const express = require("express");
const app = express();

let port = 3000;

app.listen(port , () => {
    console.log(`The App is listening on port ${port}`)
});

//controal + c is used to stop server

app.use((req , res) => {
    console.log("Request received");
});