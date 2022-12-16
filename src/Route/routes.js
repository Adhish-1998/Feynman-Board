const express = require('express');
const router = express.Router()
const { addUser, getUser} = require('../Controller/userController')


router.post('/register', addUser)
router.get('/getUser', getUser)


module.exports = router