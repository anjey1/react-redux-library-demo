const express = require('express');
const path = require('path');
const app = express();

// Define Static Files Folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.listen(3000, function () {
    console.log('app is listening on port 3000')
});
