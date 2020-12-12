const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) =>{

    // lodash

    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log("hello");
    });

    greet();
    greet();

//set header content type
// res.setHeader('Content-Type', 'text/plain');
// res.write('Hello humasn ^__^')
// res.end();

// sending html lines to the requester
// res.setHeader('Content-Type', 'text/html');
// res.write('<h2>Hello humans ^__^</h2>');
// res.write('<p>I\'ve spent some time looking through your international-data-collection, and I must say that I have yet to comprehend your concept of memes</p>');
// res.end();


// sending html file 
res.setHeader('Content-Type', 'text/html');

let path = './views/';
switch(req.url){
    case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
    case '/flying-dinosaur':
        path += 'flying_dinosaur.html';
        res.statusCode = 200;
        break;
    case '/flyingdinosaur':
        res.statusCode = 301;
        res.setHeader('Location', '/flying-dinosaur');
        res.end();
        break;
    default:
        path += '404.html';
        res.statusCode = 404;
        break;
}

fs.readFile(path, (err, data) =>{
    if(err){
        console.log(err);
        res.end();
    } else{
        res.write(data);
        res.end()
    }
})

});

server.listen(3000, 'localhost', () =>{
    console.log("listening for requests on port 3000");
});