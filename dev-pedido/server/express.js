const express = require('express'),
    app = express(),
    consign = require('consign'),
    bodyParser = require('body-parser'),
    helmet = require('helmet');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());

consign()
    .include('src/models')
    .then('src')
    .into(app);

module.exports = app;