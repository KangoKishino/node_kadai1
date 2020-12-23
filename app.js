var express = require('express');
var app = express();
const route = require('./routes/index.js');

app.set('view engine', 'ejs');

app.use('/public', express.static(__dirname + '/public'));

app.use('/', route);

app.listen(3000);