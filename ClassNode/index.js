const express= require('express')
const request=require('request')
//Syntax of express
const app= express()
//Ignore rn
//Middlewares
/*
    Ask express.js to look for a folder called views
*/
app.set("view engine", "ejs")
app.get("/", (req, res)=>{
    //console.log(req)
    res.render("homepage")
    res.send("home")
})
/*
    /class/subject_name
    route
*/
app.get("/class/:name", (req, res, error)=>{
    console.log(req)
    console.log(req.params)
    if(!error){
        res.send(`You are in ${req.params.name} class now`)
    }else{
        res.redirect("/error")
    }

})
app.get("/getmovies", (req, res)=>{
    
    const url= "http://www.omdbapi.com/?apikey=cfd672ef&i=tt0848228"
    request(url, function (error, response, body){
        if(!error && response.statusCode==200){
            //Parsing JSON into JS object
            const data= JSON.parse(body)
            //console.log(data)
            //res.send(data)
            //res.render("homepage", {movie: data})
        }else{
            res.send("Uh oh error")
        }
    })
})
app.get("/class", (req, res)=>{
    res.send("You are in general class now")
})

app.get("*", (req, res)=>{
    res.send("Go back! Illegal response")
})
//We are creating
app.listen(3000, ()=>{
    console.log("Server has started")
})