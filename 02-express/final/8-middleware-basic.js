/*  
Middleware  
any code/function that runs during a request and 
response execution of the server

Express is heavily built of middleware, 
one might say express is made up of middleware to combine into a cake
*/
const express = require('express');

const app = express();

let port = 7770;

// req --> middleware --> res

function logger(req, res, next) {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
  // res.send('Testing') this is terminating
}

/* NOTE: WHEN YOU WORK WITH MIDDLEWARE,
 YOU MUST MUST MUST PASS IT ONTO THE NEXT MIDDLEWARE
 unless you're terminating the whole cycle by sending back a response
 */

app.get('/', logger, (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
