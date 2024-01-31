const express = require('express');
const { products, people } = require('./data.js');

const app = express();
const port = 7770;

app.get('/api/products', (req, res) => {
  res.json(products);
});

// parameter query
app.get('/api/products/:productID', (req, res) => {
  console.log(req.params);
  const { productID } = req.params;
  if (!productID) {
    res.json(products);
  }
  let foundProduct = products.find(
    (product) => product.id === Number(productID)
  );
  res.json(foundProduct);
});

// query strings
app.get('/api/query', (req, res) => {
  console.log(req.query);
  const { search, price } = req.query;

  if (!search) {
    res.json(products);
  }

  const newProducts = products.map((product) => {
    if (product.name.includes(search) && product.price >= price) {
      return product;
    }
  });

  res.json(newProducts);
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
