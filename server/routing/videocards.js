function videocardsRoute(app, connection) {

    app.get('/products/videocards', async (req, res) => {
        let result = await connection.query('call heroku_a6d75df6df6ede5.getAllVideocards()');
        res.json(result[0]);
    });
}

module.exports = videocardsRoute;