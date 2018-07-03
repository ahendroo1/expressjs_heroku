var routerSpace = require('express').Router();

routerSpace.get('/data', (req, res)=>{
    res.send('get ke index');
});

module.exports = routerSpace ;