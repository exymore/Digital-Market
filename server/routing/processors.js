function processorsRoute(app, connection) {

    app.get('/products/processors', async (req, res) => {
        let result = await connection.query('call heroku_a6d75df6df6ede5.getAllProcessors()');
        res.json(result[0]);
    });
}

module.exports = processorsRoute;