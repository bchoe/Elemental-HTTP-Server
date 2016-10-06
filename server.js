'use strict';

const http = require('http');
const PORT = 3000;

http.createServer((request, response) => {
  console.log('request: ', request.method);
  console.log('request: ', request.url);
  console.log('request: ', request.headers);
  console.log('request: ', request.headers.favoritefood);
  console.log('request: ', request.headers['user-agent']);

  console.log('response: ', response);

  //write headers
  response.writeHead(200, {
    'cabsHere': 'true',
  });

  //ending it
  response.end('Hello Client');

}).listen(PORT);