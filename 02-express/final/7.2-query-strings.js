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

// new route, more complex params aka query strings
app.get('/api/v1/query', (req, res) => {
  console.log(req.query);

  /*
  My example
  
    const { search, limit } = req.query;

  const productResults = (array) => {
    return array.filter((item) => {
      if (item.name.includes(search)) {
        return item;
      }
    });
  };

  res.json(productResults(products));
  */
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send('no products match');
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(sortedProducts);
});

// error page
app.all('*', (req, res) => {
  res.status(404).send('this page does not exist');
});

//app listener
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
