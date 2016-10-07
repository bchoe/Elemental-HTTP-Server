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
//console.log("url********",url);
let show;
let splitUrl = url.split(".")[1];
console.log('splitURL********:',splitUrl);
  if(splitUrl !== "css"){
    if (request.method === "GET"){
      fs.readFile(`./public/${url}`, (err, data) => {
        if(err){

          console.log("err********:", err);
          //console.error(err);
        } else {
          //console.log('data: ', data.toString());
          show = data.toString();
          //console.log(show);
          response.writeHead(200, {
           "Content-Type": "text/html",
           "Content-Length":show.length
          });
          //res.setHeader('Content-Type', 'text/html');
          response.write(show);
          response.end();
        }
      });
    }
  } else {
    fs.readFile(`./css/styles.css`, (err, data) => {
      if(err){
      console.log("err********:", err);
      //console.error(err);
      } else {
        //console.log('data: ', data.toString());
        show = data.toString();
        //console.log(show);
        //res.setHeader('Content-Type', 'text/html');
        //console.log("css******:", show);
        response.writeHead(200, {
           "Content-Type": "text/css",
           "Content-Length":show.length
         });
        response.write(show);
        response.end();
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