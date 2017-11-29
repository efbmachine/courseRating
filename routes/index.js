var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (1==1) res.render('index',{title:'Home Page'});
  //res.render('login', { title: 'Login' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign Up' });
});

router.get('/createRate', function(req, res, next) {
  res.render('createRate', { title: 'Sign Up' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

module.exports = router;
