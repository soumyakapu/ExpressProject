const express=require('express')
const dotenv=require('dotenv').config()
const port =process.env.port
const app=express()
app.listen(port,(req,res)=>{

})
app.use(express.json())
app.use('/api/users',require('./routers/userRoutes'))
