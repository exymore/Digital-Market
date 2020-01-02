function watchesRoute(app, connection) {

    app.get('/products/watches', async (req, res) => {
        let result = await connection.query('call heroku_a6d75df6df6ede5.getAllWatches()');
        res.json(result[0]);
    });
}

module.exports = watchesRoute;