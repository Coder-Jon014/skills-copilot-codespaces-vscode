//Create a web server
var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response){
    var path = url.parse(request.url).pathname;
    switch(path){
        case '/':
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write('Hello, World.');
            response.end();
            break;
        case '/comments':
            fs.readFile(__dirname + '/comments.json', function(err, data){
                if(err){
                    console.log(err);
                    response.writeHead(404, {'Content-Type': 'text/html'});
                    response.write('Not found');
                    response.end();
                } else {
                    response.writeHead(200, {'Content-Type': 'application/json'});
                    response.write(data);
                    response.end();
                }
            });
            break;
        default:
            response.writeHead(404);
            response.write('Not found');
            response.end();
            break;
    }
});

server.listen(8001);
console.log('Server is running at http://