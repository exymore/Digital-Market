function register(app, bodyParser, connection) {

    let registerData = {};
    let customersCount = 0;

    app.post('/register', (req, res) => {
        registerData = req.body;

        let getCount = async () => {

            res = await connection.query('SELECT COUNT(*) as total FROM Customers');
            customersCount = res[0].total + 1;
        };

        let insertCustomer = async () => {

            let query = 'INSERT INTO Customers (customerID, account, firstName, lastName, email) ' +
                'VALUES (' + customersCount + ", null, '" + registerData.firstName + "', '" +
                registerData.lastName + "', '" + registerData.email + "');"
            ;
            await connection.query(query);
        };

        let insertAccount = async () => {

            let query = 'INSERT INTO accounts (login, password, customer) ' +
                "VALUES ('" + registerData.login + "', '" + registerData.password + "', " + customersCount + ");"
            ;
            await connection.query(query);

            query = "UPDATE CUSTOMERS SET account = '" + registerData.login + "' WHERE customerID = " + customersCount + ";";

            await connection.query(query);
        };

        let createCart = async () => {
            let query = 'INSERT INTO cart (user) ' +
                "VALUES ('" + registerData.login + "');";

            await connection.query(query);
        };

        const register = async () => {
            await getCount();
            await insertCustomer();
            await insertAccount();
            await createCart();
        };

        register();
        res.sendStatus(200);
    });
}

module.exports = register;