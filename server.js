'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

var pjson = require('./package.json');
var git_commit = require('./git-commit.json');
var app_status = `{"myapplication":[ { "version": "${pjson.version}", "description": "${pjson.description}", "lastcommitsha": "${git_commit.sha}" } ] }`

app.get('/status', (req, res) => {
  res.status(200).send(app_status);
});

app.listen(PORT, HOST);
console.log(`web app available on http://${HOST}:${PORT}`);
