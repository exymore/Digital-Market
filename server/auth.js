global.userData = {
    login: '',
    password: ''
};
global.isLoggedIn = false;

function auth(app, bodyParser, connection) {

    //AUTH
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    app.post('/auth', (req, res) => {
        userData = req.body;

        let query = 'SELECT ' +
            'accounts.login, accounts.password, accounts.customer ' +
            'FROM accounts ' +
            'INNER JOIN customers ON accounts.customer = customers.customerID ' +
            "WHERE accounts.Login = '" + userData.login + "';";

        connection.query(query, (err, result) => {
            if (err) throw err;
            if (result.length === 0)
                res.sendStatus(400);
            else {
                if (result[0].login === `${userData.login}` && result[0].password === `${userData.password}`) {
                    res.sendStatus(200);
                    isLoggedIn = true;
                } else {
                    res.sendStatus(400);
                    isLoggedIn = false;
                }
            }
        });
    });

    app.post('/auth/logout', (req, res) => {
        userData = {};
        isLoggedIn = false;
        cartID = 0;
        productsIDS = [];
        res.sendStatus(200);
    });

    app.get('/auth', (req, res) => {
        res.json(userData);
    });

    app.get('/auth/is', (req, res) => {
        res.json(isLoggedIn);
    });
}

module.exports = auth;