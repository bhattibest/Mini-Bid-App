const express = require('express')
const app = express()

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

app.use(bodyParser.json())

// Start User End Points
const authRoute = require('./routes/auth')
const auctionRoute = require('./routes/auction') 
const itemsRoute = require('./routes/items')
const usersRoute = require('./routes/users')

app.use('/api/user', authRoute)
app.use('/api/auction', auctionRoute) 
app.use('/api/items', itemsRoute)
app.use('/api/users', usersRoute)

// End User End Points

mongoose.connect(process.env.DB_CONNECTOR, ()=>{
    console.log('DB is connected')
})

app.get('/', (req,res) =>{
    res.send('Homepage')
})

app.listen(3000, ()=>{
    console.log('Server is up and running..')
})