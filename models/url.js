const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    shortId:{
        type: 'string',
        required: true,
        unique: true
    },
    redirectUrl:{
        type: 'string',
        required: true
    },
    visitHistory:[{
        timeStamp:{
            type: Number
        }
    }]
},{timestamps:true});

const URL = mongoose.model('url', schema);

module.exports = URL;