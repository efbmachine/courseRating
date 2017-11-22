var express = require('express');
var router = express.Router();
var users = require('../controllers/users.controller');

/* GET users listing. */
router.get('/', users.list);

router.get('/:uName',()=>{});

router.post('/', users.create);


module.exports = router;
