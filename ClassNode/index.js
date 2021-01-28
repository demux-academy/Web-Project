const express= require('express')
const request=require('request')
//Syntax of express
const app= express()
const dotenv=require('dotenv')
dotenv.config()
app.set("view engine", "ejs")
app.use('/public', express.static('public'))

app.get("/", (req, res)=>{
    res.render("homepage")
})
app.get("/aboutme", (req, res)=>{
    res.render("Aboutme")
})
app.get("/result", (req, res)=>{
    console.log(req.query.movieName)
    const url= `http://www.omdbapi.com/?apikey=cfd672ef&s=${req.query.movieName}`
    request(url, function (error, response, body){
        if(!error && response.statusCode==200){
            const data= JSON.parse(body)
            //console.log(data)
            //res.send(data)
            res.render("result", {movieData: data})
        }else{
            res.send("Uh oh error")
        }
    })
})
app.get("/result/:id", (req, res)=>{
    //console.log(req.query.movieName)
    console.log(process.env.API_KEY)
    const url= `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${req.params.id}`
    request(url, function (error, response, body){
        if(!error && response.statusCode==200){
            const data= JSON.parse(body)
            //console.log(data)
            //res.send(data)
            res.render("AboutMovie", {movieData: data})
        }else{
            res.send("Uh oh error")
        }
    })
})
app.get("*", (req, res)=>{
    res.send("Go back! Illegal response")
})
//We are creating
app.listen(process.env.PORT, ()=>{
    console.log(`Server has started at port ${process.env.PORT}`)
})