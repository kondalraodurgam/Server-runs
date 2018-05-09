var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-type': 'text/plain' })
    response.end('Kondal Strated backend code on today\n');
}).listen(8080);

console.log('Hello Kondal welcome to the backend code ');