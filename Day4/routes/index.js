const express = require("express");
const router = express.Router();
const request = require("request");
router.get("/", (req, res)=>{
    res.render("Home");
});
router.get("/signup", (req, res)=>{
    res.render("Signup");
});
router.post("/signup", (req, res)=>{
    console.log(req.body);
});
router.get("/login", (req, res)=>{
    res.render("Login");
});
router.get("/result", (req, res)=>{
    const query = req.query.search;
    const url = "http://www.omdbapi.com/?apikey=cfd672ef&s=" + query;
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body)
            console.log(data);
            if(data.Response==='False'){
                res.send("Movie Not Found");
            }else{
                res.render("Result", {data:data});    
            }
        }else{
            res.send('Error');
        }
    });
});
router.get("/result/:id", (req, res)=>{
    const url = "http://www.omdbapi.com/?apikey=cfd672ef&i=" + req.params.id;
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body)
            console.log(data);
            if(data.Response==='False'){
                res.send("Movie Not Found");
            }else{
                res.send(data);    
            }
        }else{
            res.send('Error');
        }
    });
});
module.exports= router;