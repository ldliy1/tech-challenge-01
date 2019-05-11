const express = require('express');

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

var pjson = require('./package.json');
var git_commit = require('./git-commit.json');

app.get('/status', (req, res) => {
  res.header("Content-Type",'application/json');
  res.status(200).send(JSON.stringify({myapplication: [ { version: pjson.version, description: pjson.description, lastcommitsha: git_commit.sha } ] }, null, 4));
});

const server = app.listen(PORT, function () {
  console.log(`web app available on ${PORT}`);
});

module.exports = server;
