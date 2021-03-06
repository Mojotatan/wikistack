var express = require('express');
var router = express.Router();
const wikiRouter = require('./wiki');
const userRouter = require('./user');

// router.get('/', function(req, res) {
//     res.render('index')
// })

router.use('/wiki', wikiRouter);
router.use('/user', userRouter);

module.exports = router;