const express = require('express')
const router = express.Router()

const users = require('../models/Users')

router.get('/', async(req,res) =>{
    try{
        const users = await users.find()
        res.send(users)
    }catch(err){
        res.status(400).send({message:err})
    }
})

module.exports=router