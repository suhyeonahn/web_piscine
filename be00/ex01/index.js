const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 4200;
const filePath = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
