const express = require('express')
const router = express.Router()

const auction = require('../models/Auction.js')

router.get('/', async(req,res) =>{
    try{
        const auction = await auction.find()
        res.send(auction)
    }catch(err){
        res.status(400).send({message:err})
    }
})

module.exports=router