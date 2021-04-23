'use strict'

const express=require('express')
const server= express()
const PORT = process.env.PORT || 8000;


server.use(express.static('./public'));

// server.get('/' , (req,res,)=>{
// res.send('Welcome To My Page')

// })




server.listen(PORT , ()=>{
    console.log(`Listening to port ${PORT}`)
})

