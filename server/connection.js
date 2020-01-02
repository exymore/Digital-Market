const mysql = require('mysql');
const util = require('util');

const connection = mysql.createPool({
    host: "us-cdbr-iron-east-02.cleardb.net",
    user: "b168aff0b7e2f2",
    password: "add842ac",
    database: "heroku_a6d75df6df6ede5",
    insecureAuth: true
});

connection.query = util.promisify(connection.query);

module.exports = connection;