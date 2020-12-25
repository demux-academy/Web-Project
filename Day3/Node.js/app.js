const express= require('express');
const app=express();
app.get("/", (req, res)=>{
    res.send("Hello World");
});
//Accept all routes except ones specified before
app.get("*", (req, res)=>{
    res.send("Some Error");
});
app.listen(5000, function(){
    console.log("Server Has Started");
});