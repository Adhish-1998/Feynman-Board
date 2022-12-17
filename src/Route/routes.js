const express = require('express');
const router = express.Router()
const { addUser, getUser } = require('../Controller/userController')
const { addTopic, getTopic } = require('../Controller/topicController')


router.post('/register', addUser)
router.post('/getUser', getUser)

router.post('/addTopic', addTopic)
router.get('/getTopic', getTopic)

module.exports = router