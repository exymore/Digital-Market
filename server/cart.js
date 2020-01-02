global.cartID = 0;
global.productsIDS = [];

function cart(app, bodyParser, connection) {

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    let getCartID = async () => {

        cartID = 0;
        const query = "SELECT cartID FROM cart WHERE user = '" + userData.login + "';";

        let result = await connection.query(query);
        cartID = result[0].cartID;
    };

    app.get('/cart', async (req, res) => {

        let getProductsID = async () => {

            productsIDS = [];
            const query = "SELECT productID FROM cart_items WHERE cartID = " + cartID + ";";

            let result = await connection.query(query);

            for (let i = 0; i < result.length; i++) {
                productsIDS.push(result[i].productID);
            }
        };

        let getProducts = async () => {

            let whereStatement = "";
            let result;

            if (productsIDS.length !== 0) {
                for (let i = 0; i < productsIDS.length; i++) {
                    if (i !== productsIDS.length - 1)
                        whereStatement += "productID = " + productsIDS[i] + " OR ";
                    else
                        whereStatement += "productID = " + productsIDS[i];
                }

                const query = 'SELECT\n' +
                  '  products.productID,\n' +
                  '  categories.name AS category,\n' +
                  '  brands.name     AS brand,\n' +
                  '  products.productName,\n' +
                  '  description.description,\n' +
                  '  products.price,\n' +
                  '  images.image\n' +
                  'FROM products\n' +
                  '  INNER JOIN categories ON products.category = categories.categoryID\n' +
                  '  INNER JOIN brands ON products.brand = brands.brandID\n' +
                  '  INNER JOIN description ON products.description = description.descriptionID\n' +
                  '  INNER JOIN images ON products.image = images.imageID\n' +
                  'WHERE ' + whereStatement;

                result = await connection.query(query);
                res.status(200).send(result);
            } else
                res.status(200).send([]);
        };

        let cart = async () => {
            await getCartID();
            await getProductsID();
            await getProducts();
        };

        if (isLoggedIn)
            await cart();
        else
            res.status(200).send([]);
    });

    app.post('/cart', (req, res) => {

        let addToCart = async () => {

            let {productID} = req.body;
            let query = 'INSERT INTO cart_items (cartID, productID) ' +
                'VALUES (' + cartID + ", " + productID + ");";

            await connection.query(query);
        };

        let cartAdd = async () => {
            await getCartID();
            await addToCart();
        };

        if (isLoggedIn) {
            cartAdd().then(res.sendStatus(200));
        } else
            res.sendStatus(200);
    });
}

module.exports = cart;