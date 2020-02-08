const express = require('express');
const app = express();

//make mock json file for testing
const fs = require('fs');
let rawdata = fs.readFileSync('mock_json.json');
let student = JSON.parse(rawdata);

const myLogger = function (req, res, next) {
    console.log('LOGGED');
    next()
};

app.use(myLogger);

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.put('/put', (req,res) => {
    res.send(student)
});

app.get('/playerA', function (req, res) {
    res.send('Only bad boys do bad commits')
});

app.listen(3000);