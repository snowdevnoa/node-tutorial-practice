const express = require('express');
const path = require('path');
const app = express();

let port = 7770;

//setup static and middleware
app.use(express.static('./02-express/navbar-app/public'));

/*

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './02-express/navbar-app/index.html'));
});

wait so doesn't this(sendFile method and argument above) mean this is a static asset as well?
    Yes so add all the html to your static asset in the public folder and that will effectively do that

    adding to static assets
    SSR

 */

app.all('*', (req, res) => {
  res.send('Page does not exist');
});

app.listen(port, () => {
  console.log(`server is listening on ${port}...`);
});
