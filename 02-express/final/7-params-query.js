const express = require('express');
const { products, people } = require('./data.js');

const app = express();
let port = 7770;

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

//Route params: all items
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

// Route params: single item. Come up with whatever name and add a colon
app.get('/api/products/:productID', (req, res) => {
  //   console.log(req);
  //   console.log(req.params);
  const { productID } = req.params;
  //   REMEMBER THIS RETURNS A STRING ^ so below it below using Number()
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist');
  }
  res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params);
  res.send('hello world');
});

// error page
app.all('*', (req, res) => {
  res.status(404).send('this page does not exist');
});

//app listener
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
