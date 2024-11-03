const express = require('express');
const route = require('./routes/url');
const {createConnection} = require('./connect');
const path = require('path');
const URL = require('./models/url');
const staticRoutes = require('./routes/staticRoutes');
const userRoutes = require('./routes/user');
const cookie_parser = require('cookie-parser');
const {restrictToLoginUserOnly} = require('./middleware/auth');

const app = express();

const PORT  = 8001;
createConnection('mongodb://localhost:27017/Url-Shortner').then(()=>{
    console.log('Connected to MongoDB');
})

//for server side rendering

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(cookie_parser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/',staticRoutes);
app.use('/url',restrictToLoginUserOnly,route);
app.use('/user',userRoutes);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});