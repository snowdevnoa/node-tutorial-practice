const express = require('express');
const { products, people } = require('./data.js');

const app = express();
let port = 7770;

app.get('/', (req, res) => {
  res.json(products);
});

app.all('*', (req, res) => {
  res.status(404).send('this page does not exist');
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
