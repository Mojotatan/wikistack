const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

var app = express();

var env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
morgan('combined');

app.listen(3000, console.log("Listening on port 3000..."));
