
const express = require('express'),
    app = express(),
    consign = require('consign'),
    bodyParser = require('body-parser');

// seting variaveis
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('./src/public'));

// middlewares    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


consign()
    .include('src/models')
    .then('src/controllers')
    .then('src/routes')
    .into(app);

module.exports = app;