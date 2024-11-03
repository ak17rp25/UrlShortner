const express = require('express');

const routes = express.Router();
const {handleCreateUser,handleLoginUser} = require("../controller/user");

routes.post('/signupuser',handleCreateUser);
routes.post('/login',handleLoginUser)

module.exports = routes;

