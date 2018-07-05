var lowdb = require('lowdb');
var FSync = require('lowdb/adapters/FileSync');
var adapter = new FSync('db.json');
var db = lowdb(adapter);
db.defaults({
    dataSaya:[]
}).write();

db.get('dataSaya').push({nama:"andi", usia:"23"}).write();