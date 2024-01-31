const express = require('express');
const app = express();
const logger = require('./02-express/final/9-logger.js');
const authorize = require('./02-express/final/9-authorize.js');
const morgan = require('morgan'); //third party middleware option

let port = 7770;

// req --> middleware --> res
/* 
1.use vs route (middleware can apply to specific routes and not just all)
2. options - our own / express / third party (basically where can we get our middleware)
*/

/* 
app.use([logger, authorize]); //middleware functions will be executed in their order

are we able to add middleware into routes?

Yes

for example we just want to apply the logger and authorize in the /api/items

do it by adding the middleware as a paramater inbetween
app.get('/api/items', [logger, authorize], (req, res) => {
  res.send('Items');
});
*/

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/items', (req, res) => {
  res.send('Items');
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
