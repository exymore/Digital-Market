function ssdsRoute(app, connection) {

    app.get('/products/ssd', async (req, res) => {
        let result = await connection.query('call heroku_a6d75df6df6ede5.getAllSSDS()');
        res.json(result[0]);
    });
}

module.exports = ssdsRoute;