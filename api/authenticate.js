var express = require('express');

var app = express();
var router = express.Router();
var logger=require('./logger');

// a middleware function with no mount path. This code is executed for every request to the router
// router.use(function (req, res, next) {
//   console.log('Time:', Date.now())
//   next()
// })

router.get('/',async (req,res)=> {
    res.send(`authenticated!`);
});
module.exports = router;