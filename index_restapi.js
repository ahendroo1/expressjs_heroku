var express = require('express');
var bodyParser = require('body-parser');
var routerSpace = require('./route/space');
var cors = require('cors');
var app = express();

app.use(bodyParser.json());
app.use(routerSpace);
app.use(cors(0));


app.get('/', (req, res)=>{
    res.send({status: 'get'})
});

app.get('/:', (req, res)=>{
    res.send({status: 'get : ' + req.url})
});

app.post('/post_data', (req, res)=>{
    console.log(req.body);
    res.send({
        nama_lengkap: req.body.nama,
        email: req.body.kota
    }) 
});

app.listen(3210, ()=> {
    console.log('Server @port 3210');
});