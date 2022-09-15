const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World nodeJs!');
    }

    if (req.url == "/readfile") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        const data = fs.readFileSync('node-performance-test/data.txt', 'utf8');
        res.end(data);
    }

    if (req.url == "/fibonacci") {
        let a = 0, b = 1, c = 0;
        for (let i = 2; i < 2000000; i++) {
            c = a + b;
            a = b;
            b = c;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("done");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 