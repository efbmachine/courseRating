var express = require('express'),
    router = express.Router(),
    rates = require('../controllers/rates.controller'),
    courses = require('../controllers/courses.controller');

// GET rates listing.
router.get('/', courses.list);

router.post('/',rates.create);




module.exports = router;