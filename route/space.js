var routerSpace = require('express').Router();

routerSpace.get('/get_nodata', (req, res)=>{
    res.send('get ke index');
});

module.exports = routerSpace ;