const http = require('http');

const server = http.createServer((req, res)=>{

    const url = req.url;

    if (url === '/'){
        res.writeHead(200, {'Content-type':'text/html'});
        res.write("<h1>INDEX SAYFASI</h1>");
    }

    else if (url === '/about'){
        res.writeHead(200, {'Content-type':'text/html'});
        res.write("ABOUT SAYFASI");
    }

    else if (url === '/contact'){
        res.writeHead(200, {'Content-type':'text/html'});
        res.write("CONTACT SAYFASI");
    }

    else{
        res.writeHead(404, {'Content-type':'text/html'});
        res.write("<h1>404 Not Found.</h1>");
    }

    res.end();
});

const port = 3000;

server.listen(port, ()=>{
    console.log(`sunucu port ${port} baslatildi.`);
});

