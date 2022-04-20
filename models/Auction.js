const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    auctionItemId:{
        type:String,
        required:true
    },
    biddingPrice:{
        type:String,
        required:true
    },
    biddingUser:{
        type:String,
        required:true
    },
    itemStatus:{
        type:String,
        required:true
    },
    timeLeft:{
        type:String,
        required:true
    },
    auctionWinner:{
        type:String,
        required:true
    },
    otherInformation:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('auction', PostSchema)

    

    