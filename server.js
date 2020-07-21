"use strict"

var express = require('express');
var path = require('path');


var app = express();

// Define Static Files Folder
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(3000, function() {
    console.log('app is listening on port 3000')
})