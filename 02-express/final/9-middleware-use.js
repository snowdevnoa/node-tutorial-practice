/*  
Middleware  
any code/function that runs during a request and 
response execution of the server

Express is heavily built of middleware, 
one might say express is made up of middleware to combine into a cake
*/
const express = require('express');
const app = express();
const logger = require('./9-logger.js');
const authorize = require('./9-authorize.js');

let port = 7770;

// req --> middleware --> res

/* Can you add the middleware to all routes automatically instead of manually?
YES you can by using .use()
 */

app.use([logger, authorize]); //middleware functions will be executed in their order

/*
app.use('/api', logger);
 if you provide the first argument, basically the middleware will only 
    apply to routes that have that first so in this example 
    /api/products, /api/items are the only ones that will invoke the middleware.
    If you omit the first argument then it will invoke for all routes

remember that order matters here for example if you put app.use()
    after the app.get('/'...) then if you were to go to the home page, this
    logger will not show for the home page

 THATS WHY MIDDLEWARE IS USUALLY FIRST THEN ALL YOUR ROUTE METHODS
*/

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
