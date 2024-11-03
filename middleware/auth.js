const {getUserSession} = require('../service/auth');
async function restrictToLoginUserOnly(req, res, next) {
    const cookieId = req?.headers?.uid;
    console.log(cookieId);
    if(!cookieId){
        return res.redirect('/user/login');
         
    }
    const user = getUserSession(cookieId);
    if(!user){
        return res.redirect('/user/login');
    }
    req.user = user;
    next();
}

module.exports = {restrictToLoginUserOnly};