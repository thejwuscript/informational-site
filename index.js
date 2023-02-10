const fs = require("fs");
const http = require("http");

const hostname = "localhost";
const port = 8080;

http
  .createServer((req, res) => {
    if (req.url === '/') {
      fs.readFile("index.html", "utf-8", (err, data) => {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (req.url === '/about') {
      fs.readFile('about.html', 'utf-8', (err, data) => {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(data);
        return res.end();
      });
    } else if (req.url === '/contact-me') {
      fs.readFile('contact-me.html', 'utf-8', (err, data) => {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(data);
        return res.end();
      })
    } else {
      fs.readFile('404.html', 'utf-8', (err, data) => {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(data);
        res.end();
      })
    }
  })
  .listen(port, hostname, () => console.log("Server is connected."));
