// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!

var fs = require('fs');


// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });

    }

     //Serves the routing to localhost:6789/dojo.html or any other URL.
    else if (request.url === "/ninjas") {
         fs.readFile('./views/ninjas.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }

    else if (request.url === "/dojos/new") {
         fs.readFile('./views/dojos.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }

     //Serves css route to localhost:6789 just like the HTML. (Request/Response cycle)
     //Content type header is changed to 'text/css'
     else if (request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }


    // request didn't match anything:
    else {
        response.end('File not found!!!');
    }
});


// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");