const mongoose = require('mongoose');
const { Schema } = mongoose

const sub = new Schema({
    no:{
        type:Number,
        default:1,
        
    },
    item:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"item",
    }
},{ _id : false })

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    cart:[sub]
});

const user = mongoose.model('user', UserSchema);
user.createIndexes()
module.exports = user