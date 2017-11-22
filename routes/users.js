var express = require('express');
var router = express.Router();
var users = require('../controllers/users');

/* GET users listing. */
router.get('/', users.list);

router.get('/:uName',()=>{});

router.post('/login', users.create);


module.exports = router;
