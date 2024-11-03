const jwt = require('jsonwebtoken');
const secret = 'akash$123'

function setUserSession(user){
    return jwt.sign({
        _id: user._id,
        email: user._email
    }, secret);
}

function getUserSession(token){
    if(!token){
        return null;
    }
    return jwt.verify(token, secret);
}

module.exports = {setUserSession,getUserSession}