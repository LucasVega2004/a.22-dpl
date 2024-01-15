var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
router.get('/cool', function (req, res, next) {
  res.send('It is not the richer who has the most but the one who needs the least')

});