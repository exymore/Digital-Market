function phonesRoute(app, connection) {
  app.get('/products/phones', async (req, res) => {
    let result = await connection.query('call heroku_a6d75df6df6ede5.getAllPhones()');
    res.json(result[0]);
  });
}

module.exports = phonesRoute;