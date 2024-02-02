const express = require('express');
const app = express();

const port = 7770;

//Import routers
const people = require('./routes/people.js');
const login = require('./routes/auth.js');

// simple app that has a form that has a inputbox for name
app.use(express.static('./methods-public'));

/*parse the form data from the POST request and essentially 
add those values to req.body
*/
app.use(express.urlencoded({ extended: false }));

//parse json data
app.use(express.json());

//ROUTERS HERE
app.use('/api/people', people);
app.use('/login', login);

/**************************************************************/

app.listen(port, () => {
  console.log(`listening on server ${port}`);
});
