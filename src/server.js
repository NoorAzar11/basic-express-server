'use strict';

const express = require('express');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

const app = express();

app.use(logger);

function start(port){
    app.listen(port,()=>
        console.log(`Hello from the Other side : ${port}`));
    
}

app.get('/',(req,res)=>{
    res.send('Welcome To Home Page')
});

app.get('/person',validator,(req,res)=>{
    res.json({
        name:req.name
    })
});

app.use('*',notFoundHandler);
app.use(errorHandler);

module.exports={
    app:app,
    start,
};