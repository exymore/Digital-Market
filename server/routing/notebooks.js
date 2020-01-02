function notesRoute(app, connection) {

    app.get('/products/notebooks', async (req, res) => {
        let result = await connection.query('call heroku_a6d75df6df6ede5.getAllNotebooks()');
        res.json(result[0]);
    });
}

module.exports = notesRoute;