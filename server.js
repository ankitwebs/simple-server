const http = require('http');

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    res.end('Hello Node.JS');
})

server.listen(1337, () => {
    console.log('Node.JS is running on port 1337')
})