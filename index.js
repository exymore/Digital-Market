const express = require('express');
const bodyParser = require('body-parser');

const connection = require('./server/connection');
const register = require('./server/register');
const auth = require('./server/auth');
const cart = require('./server/cart');
const routing = require('./server/routing/routing');

const app = express();
const port = process.env.PORT || 3001;

const root = require('path').join(__dirname, 'client', 'build');
app.use(express.static(root));

routing(app, connection, express);
auth(app, bodyParser, connection);
cart(app, bodyParser, connection);
register(app, bodyParser, connection);

app.listen(port);