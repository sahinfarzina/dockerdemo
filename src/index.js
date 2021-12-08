const path = require('path')
const express = require('express')
const dotenv = require('dotenv')


//load env variables
dotenv.config({path:'./config/config.env'})

const app = express()
app.get('/',(req,res,next)=>{
    console.log(req.get('host'))
    res.send('Welcome Back')
})
var PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})