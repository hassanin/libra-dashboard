global.staticOptions = require('./config/static.json');
const logger = require('./api/logger');

var express = require('express')
var app = express()
var authenticate = require("./api/authenticate");

app.use(`/authenticate`,authenticate);
logger.debug("Hello there!");

const port = global.staticOptions.port || "3000";
app.listen(port,async(err)=>{
    if(!err)
    {
        logger.info(`app started succseefully on port ${port}`);
    }
    else
    {
        logger.error(`Error starting the server on port ${port}, caught exception: ${err}`);
    }
});