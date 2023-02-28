const http = require('http');
const fs = require('fs');

const PORT = 4200;
const FILE_PATH = './data.json';

const server = http.createServer((req, res) => {
  // GET /file
  if (req.method === 'GET' && req.url === '/file') {
    fs.readFile(FILE_PATH, (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
        return;
      }

      let content = {};
      if (data.length !== 0) {
        content = JSON.parse(data);
      }

      res.writeHead(200, {'Content-Type': 'application/json'});
      if (Object.keys(content).length === 0) {
        res.end('{"message": "Content retrieved successfully.", "data": "empty"}');
      } else {
        res.end(JSON.stringify({'message': 'Content retrieved successfully.', 'data': content}));
      }
    });
  }

  // POST /file
  else if (req.method === 'POST' && req.url === '/file') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const now = new Date();
      const timestamp = now.getTime();
      const newContent = {[timestamp]: body};
      fs.readFile(FILE_PATH, (err, data) => {
        if (err) {
          console.error(err);
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.end('Internal Server Error');
          return;
        }

        let content = {};
        if (data.length !== 0) {
          content = JSON.parse(data);
        }
        Object.assign(content, newContent);
        fs.writeFile(FILE_PATH, JSON.stringify(content), err => {
          if (err) {
            console.error(err);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
            return;
          }

          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify({'message': 'Content added successfully.', 'edited_time': now.toISOString(), 'data': newContent}));
        });
      });
    });
  }

  // DELETE /file
  else if (req.method === 'DELETE' && req.url === '/file') {
    fs.writeFile(FILE_PATH, '{}', err => {
      if (err) {
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
        return;
      }

      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({'message': 'Content deleted successfully.'}));
    });
  }

  // 404 Not Found
  else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
