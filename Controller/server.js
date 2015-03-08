var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('cookie-session');

app.get('/', function(req, res){
//    res.render('../Views/Eshopper/index.html');
    res.send('Accueil du site');
})
.use(function(req, res, next){
    res.redirect('/');
})
.listen(8080)

