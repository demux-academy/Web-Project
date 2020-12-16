const express= require('express');
const app=express();
app.get("/", (req, res)=>{
    res.send("Hello World");
});
app.get("*", (req, res)=>{
    res.send("Some Error");
});
app.listen(5000, function(){
    console.log("Server Has Started");
});