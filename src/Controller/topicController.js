const mongoose = require('mongoose')

const topicSchema = mongoose.Schema({}, {strict : false})
const topicModel = mongoose.model('topic', topicSchema)

const addTopic = async (req,res) => {
    let topic = await topicModel.create(req.body)
    return res.send({data : topic}) 
}

const getTopic = async(req,res) => {
    let topic = await topicModel.find(req.body).select({_id:0, __v:0})
    return res.send({data : topic}) 
}

module.exports = {
    addTopic,
    getTopic
}