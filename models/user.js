const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    emailId:{
        type: 'string',
        required: true,
        unique: true
    },
    password:{
        type: 'string',
        required: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{timestamps: true});

const user = mongoose.model('User', userSchema);

module.exports = user;