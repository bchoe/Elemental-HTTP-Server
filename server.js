'use strict';

const http = require('http');
const PORT = 3000;
const fs = require('fs');

http.createServer((request, response) => {
  //console.log('request: ', request);
  //console.log('request: ', request.headers);
  console.log('request method: ', request.method);
  console.log('request url: ', request.url);
  //console.log('request: ', request.headers.favoritefood);
  //console.log('request: ', request.headers['user-agent']);

  //console.log('response: ', response);

let url = request.url;
let show;
  if (request.method === "GET"){
    fs.readFile(`./public/index.html`, (err, data) => {
      if(err){

        console.log("err********:", err);
        //console.error(err);
      } else {
        //console.log('data: ', data.toString());
        show = data.toString();
        console.log(show);
        //res.setHeader('Content-Type', 'text/html');
        response.end(show);
      }
    });
  }


  //console.log('data: ', JSON.parse(data).name);
  //write headers

/*  response.writeHead(200, {
    'cabsHere': 'true',

  });*/

/*  response.writeHead(404, {
    'cabsHere': 'true',
  });*/

  //ending it
/*  response.end('Hello Client');*/

}).listen(PORT);