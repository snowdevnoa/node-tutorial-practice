const express = require('express');
const path = require('path');
const app = express();

let port = 7770;

//setup static and middleware
app.use(express.static('./02-express/navbar-app/public'));
/*
static asset mean file where server doesn't need to change it, place it in designated public/static folder
all static resources (css, js for browser) will be transfered to the public folder.

"i thought js made my app dynamic?"
Yes, however this is a browser app so that js is dynamic on the browser but as
far as the server is concerned. it's a file that doesn't need changing
*/

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './02-express/navbar-app/index.html'));
});

app.all('*', (req, res) => {
  res.send('Page does not exist');
});

app.listen(port, () => {
  console.log(`server is listening on ${port}...`);
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

note that we didn't need to set up any statuses or content type,
express took care of it all
*/
