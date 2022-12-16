const express = require('express')
const mongoose = require('mongoose')
const Route = require('./Route/routes')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://Adhish-1998-DataBase:vQrIj9jTyDzRssqt@cluster0.af5tq.mongodb.net/Feynman-Board', { 
     useNewUrlparser : true 
})
.then(()=>console.log("MomgoDB is Connect"))
.catch(()=>console.log(err))

app.use('/',Route)

app.listen( process.env.PORT || 5000, ()=>{
    console.log("App is running on Port", process.env.PORT || 5000)
})