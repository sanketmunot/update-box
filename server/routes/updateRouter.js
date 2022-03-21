var express = require('express');
const { addnewUpdate, getRecentUpdates } = require('../controller/updateController');
var router = express.Router();

/* GET home page. */
router.post('/add', addnewUpdate);
router.get('/recentUpdates',getRecentUpdates)
module.exports = router;
