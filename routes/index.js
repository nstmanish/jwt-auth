const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

router.get('/', auth, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
