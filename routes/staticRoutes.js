const express = require('express');
const routes = express.Router();

routes.get('/',(req,res)=>{
    return res.render('home');
})

routes.get('/user/signupuser',(req,res)=>{
    return res.render('signup');
});

routes.get('/user/login',(req,res)=>{
    return res.render('login');
});


module.exports = routes;

