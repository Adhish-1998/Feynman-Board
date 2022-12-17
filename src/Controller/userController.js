const mongoose = require('mongoose')


let userSchema = new mongoose.Schema({}, { strict: false }) 
   let userModel = mongoose.model('user',userSchema)

const addUser = async(req,res) =>{
   let user = await userModel.create(req.body);
   return res.send({data : user})
}


const getUser = async(req,res) =>{   
    let user = await userModel.findOne({user: req.body.user})
    return res.send({data : user})
 }

module.exports = {
    addUser,
    getUser
}