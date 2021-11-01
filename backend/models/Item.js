const mongoose = require('mongoose');
const {Schema} = mongoose
const ItemSchema = new Schema({
    user:[{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true, 
    },
    rating:{
        type:Number,
        default:0
    },
    category:{
        type: String,
        default: "General"
    },
    img:{
        type:String,
        default:"default.jpg"
    }, 
    date:{
        type: Date,
        default: Date.now
    },

  });

  module.exports = mongoose.model('item', ItemSchema);