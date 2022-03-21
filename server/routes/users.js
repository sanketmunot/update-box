var express = require('express');
const { addNewUser, getUser, checkAddUser } = require('../controller/userController');
var router = express.Router();

router.put('/checkAdd',checkAddUser)
router.get('/',getUser)
router.post('/create', addNewUser);

module.exports = router;
