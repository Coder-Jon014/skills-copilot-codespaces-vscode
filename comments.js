//Create a web server that can listen to incoming requests
//and respond with a message to the user.
//The server should listen on port 8080
//When a user visits the root route, the server should respond with "Hello, World!"
//When a user visits the /cats route, the server should respond with "Meow!"
//When a user visits the /dogs route, the server should respond with "Woof!"
//When a user visits the /cats_and_dogs route, the server should respond with "Dogs and cats living together...mass hysteria!!"
//When a user visits any other route, the server should respond with a 404 error.
//You should be able to test your server by visiting http://localhost:8080 in your browser.
//If you want to test the other routes, you can use the curl command in your terminal.
//curl http://localhost:8080/cats
//curl http://localhost:8080/dogs
//curl http://localhost:8080/cats_and_dogs
//curl http://localhost:8080/whatever

const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!');
    } else if (req.url === '/cats') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Meow!');
    } else if (req.url === '/dogs') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Woof!');
    } else if (req.url === '/cats_and_dogs') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Dogs and cats living together...mass hysteria!!');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
