console.log('stream example');

const http = require('http');
const fs = require('fs');

const server = http.createServer();

// register a listner to subscribe to event
server.on('request', (req, res) => {
  //   const text = fs.readFileSync("./content/bigger.txt", "utf8");
  //   res.end(text);
  const fileStream = fs.createReadStream('content/bigger.txt', 'utf8');
  fileStream.on('open', () => {
    fileStream.pipe(res);
  });
  fileStream.on('error', (err) => {
    res.end(err);
  });
});

server.listen(7770);
