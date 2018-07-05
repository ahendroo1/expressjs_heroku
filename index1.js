var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/api/:xnow', (req, res)=>{
    var poeple = [{
        "nama":"doni",
        "usia":"21"
    },
    {
        "nama":"sony",
        "usia":"29"
        
    }];

    res.render('index_ejs', {peopleEjs:people, link:req.params.xnow});
});

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
    // res.send('Home Selamat datang');

});

app.get('/info', (req, res)=>{
    res.send('kknkjnsxs');
    // res.send('Home Selamat datang');
});

// json getLink
// app.get('/:id', (req, res)=>{

//     res.sendFile(__dirname + '/index.json');
// });

// app.get('/api/:nama', (req, res)=>{

//     res.send('get ke Api : ' + req.params.nama);
// });

app.listen(3210, ()=> {
    console.log('Server @port 3210');
});