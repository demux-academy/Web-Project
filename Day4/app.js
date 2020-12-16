const express= require('express');
const app=express();
//Routes
const indexRoutes= require("./routes/index");


//Middleware
app.set("view engine", "ejs");
app.use('/public', express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/", indexRoutes);
app.get("*", (req, res)=>{
    res.send("Some Error");
});
app.listen(5000, function(){
    console.log("Server Has Started");
});