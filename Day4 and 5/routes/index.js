const express = require("express");
const router = express.Router();
const request = require("request");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
router.get("/", (req, res)=>{
    res.render("Home");
});
router.get("/signup", (req, res)=>{
    res.render("Signup");
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
            //console.log(data);
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
            //console.log(data);
            if(data.Response==='False'){
                res.send("Movie Not Found");
            }else{
                //res.send(data);
                res.render("Info", {movie: data});    
            }
        }else{
            res.send('Error');
        }
    });
});
router.post("/signup", (req, res)=>{
    console.log("Signup Request");
    let hash = bcrypt.hashSync(req.body.password, 14);
    req.body.password = hash;
    let registered_user = new User(req.body);
    console.log(registered_user);
    registered_user.save(function(err, doc) {
        if (err) {
            req.flash("error", "Already Taken Email");
            console.log("Already Taken Username");
            res.redirect("/signup");
        } else {
            req.flash("success", "Signup was successfully, now you can login");
            console.log("Login Success");
            res.redirect("/login");
        }
    });
});
router.post("/login", function(req, res) {
    User.findOne({ Email: req.body.Email}, (err, user) => {
        if (err || !user || !(bcrypt.compareSync(req.body.password, user.password))) {
            req.flash("error", "Incorrect Username/Password");
            req.session.isLoggedIn = false;
            res.redirect("/");
        } else {
            //console.log("Login is successfull");
            req.flash("success", "Login Successful");
            //Setting Up the session
            req.session.isLoggedIn = true;
            req.session.user = user;
            res.redirect("/");
        }
    });
});
router.get("/logout", function(req, res) {
    if (req.session) {
        req.session.destroy(function(err) {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
});
module.exports= router;