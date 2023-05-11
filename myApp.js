let express = require('express');
let app = express();
const morgan = require('morgan');
require('dotenv').config();

app.use((req, res, next) => {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();
});

let response = 'Hello json';
app.use(express.static(__dirname + '/'));

app.get('/json', (req, res) => {
  res.status(200).json({
    message:
      process.env.MESSAGE_STYLE === 'uppercase'
        ? response.toUpperCase()
        : response,
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// console.log('Hello World');`

module.exports = app;
