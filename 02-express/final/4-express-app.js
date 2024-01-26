const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('user hit the resource');
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

//handles all http verbs
app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource not found</h1>');
});

app.listen(7770, () => {
  console.log(`server is litening to port 7770...`);
});

/*
HTTP verbs
app.get
app.post
app.put
app.delete
app.all
app.use
app.listen

express can handle the status and headers for us, usually common to still define status on error responses
*/
