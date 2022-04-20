const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now
    },
    condition:{
        type:String,
        required:true
    },
    expirationTime:{
        type:Date,
        default:Date.now
    },
    itemOwnerEmail:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('items', PostSchema)