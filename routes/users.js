var express = require('express');
var router = express.Router();
var users = require('../controllers/users.controller');

/* GET users listing. */
router.get('/', users.list);
router.get('/:uName',users.userByName);

//router.get('/:uName',()=>{});
//router.get('/:uName/updatePassword', users.updatePassword);
router.post('/', users.create);


module.exports = router;
