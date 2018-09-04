

// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!

var fs = require('fs');


// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });

    }

     //Serves the routing to localhost:6789/dojo.html or any other URL.
    else if (request.url === "/cats") {
         fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }

    else if (request.url === "/cats/new") {
         fs.readFile('./views/form.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }

    //-------------------IMAGES--------------------------------//

    else if(request.url === '/images/blackcat.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/blackcat.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/images/Whitecat.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/Whitecat.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/images/browncat.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/browncat.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/images/Bucatti.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/Bucatti.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/images/nissan.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/nissan.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/images/bmw.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/bmw.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
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