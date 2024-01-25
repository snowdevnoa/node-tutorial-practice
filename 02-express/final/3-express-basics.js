const express = require('express');

// alternatively since this is a function you can invoke it right away, require('express')();

/* 
very similar to node's
const server = http.createServer();

server.on([name of event aka request], callback)

server.listen([port], callback)
*/

const app = express();

app.get('/', (req, res) => {
  console.log('user hit the resource');
  res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
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
*/
