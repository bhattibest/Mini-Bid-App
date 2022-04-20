const express = require('express')
const Items = require('../models/Items')
const router = express.Router()

const items = require('../models/Items')
const verifyToken = require('../verifyToken')

router.get('/', verifyToken, async(req,res) =>{
    try{
        const items = await items.find()
        res.send(items)
    }catch(err){
        res.status(400).send({message:err})
    }
})

// POST (Create Data)
router.post('/item', verifyToken, async(req,res)=>{
    // console.log(req.body)
    const item = new Items({
        title:req.body.title,
        condition:req.body.condition,
        itemOwnerEmail:req.body.itemOwnerEmail
    })

// router.get('/', (req, res) =>{
//     res.send('You are in Posts!')
// })

// try to insert...
try{
    const itemToSave = await item.save()
    res.send(itemToSave)
   }catch(err){
       res.send({message:err})
   }
})

// (GET 1 (Read))
router.get('/item', verifyToken, async(req,res) =>{
    try{
        const getItems = await items.find()
        res.send(getItems)
    }catch(err){
        res.send({message:err})
    }
})

//GET 2 (Read item by Id)
router.get('/item/:itemId', verifyToken, async(req,res) =>{
      try{
          const getItemById = await items.findById(req.params.itemId)
          res.send(getItemById)
    }catch(err){
         res.send({message:err})
    }
 
 })
module.exports=router