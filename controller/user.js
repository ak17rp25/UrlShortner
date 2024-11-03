const user = require('../models/user');
const { v4: uuidv4 } = require('uuid');
const {setUserSession,getUserSession} = require('../service/auth');

async function handleCreateUser(req,res){
    const {name,email,password} = req.body;
    console.log(name,email,password);
    if(!name ||!email ||!password){
        return res.status(400).json({message: 'All fields are required'});
    }
    if(password.length < 8){
        return res.status(400).json({message: 'Password should be at least 8 characters long'});
    }
    await user.create({
        name:name,
        emailId:email,
        password: password
    });
    console.log('User created successfully');
    return res.redirect('/');
}

async function handleLoginUser(req,res){
    const {email,password} = req.body;
    const users = await user.findOne({emailId: email, password: password});
    if(!users){
        return res.status(400).json({message: 'User Not found'});
    }
    const token = setUserSession(users);
    return res.json("uid",token);
}

module.exports = {handleCreateUser,handleLoginUser}