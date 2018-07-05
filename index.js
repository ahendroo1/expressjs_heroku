var express = require('express');
var bodyParser = require('body-parser');
var routerSpace = require('./route/space');
var cors = require('cors');
var lowdb = require('lowdb');
var FSync = require('lowdb/adapters/FileSync');
var adapter = new FSync('db.json');
var db = lowdb(adapter);
var app = express();

app.use(bodyParser.json());
app.use(routerSpace);
app.use(cors(0));
// db.defaults({
//     dataSaya:[]
// }).write();

app.get('/', (req, res)=>{
    res.send({status: 'get'})
});

app.get('/:', (req, res)=>{
    res.send({status: 'get : ' + req.url})
});

app.post('/post_data', (req, res)=>{
    console.log(req.body);
        
        // db.get('dataku')
        // .push({
        //     nama: req.body.nama,
        //     usia: req.body.usia
        // }).write();
        
    res.send({

        nama_lengkap: req.body.nama,
        email: req.body.kota

    }) 
});

app.listen(3210, ()=> {
    console.log('Server @port 3210');
});