const express = require('express');
const route = require('./routes/url');
const {createConnection} = require('./connect');
const path = require('path');
const URL = require('./models/url');
const staticRoutes = require('./routes/staticRoutes');

const app = express();

const PORT  = 8001;
createConnection('mongodb://localhost:27017/Url-Shortner').then(()=>{
    console.log('Connected to MongoDB');
})

//for server side rendering

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', staticRoutes);
app.use('/url',route);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});