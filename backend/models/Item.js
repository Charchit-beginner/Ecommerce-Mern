const mongoose = require('mongoose');
const {Schema} = mongoose
const ItemSchema = new Schema({
    // user:[{
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref: 'user'
    // }],
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    img:{
        type:String,
        default:"default.jpg"
    }, 
    like:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        default:1
    },
    date:{
        type: Date,
        default: Date.now
    },

  });

  module.exports = mongoose.model('item', ItemSchema);