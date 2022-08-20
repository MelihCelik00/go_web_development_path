const http = require('http');

const server = http.createServer((req, res)=>{
    
    const url = req.url;  // catch after 'url/'

    if(url === '/'){  // index page
        res.writeHead(200, {'Content-type':'text/html'});
        res.write("<h1>Index Sayfasina Hosgeldiniz</h1>");
    }
    else if(url === '/hakkimda'){  // index page
        res.writeHead(200, {'Content-type':'text/html'});
        res.write("<h2>Hakkimda Sayfasina Hosgeldiniz</h2>");
    }
    else if(url === '/iletisim'){  // index page
        res.writeHead(200, {'Content-type':'text/html'});
        res.write(`<h2>Iletisim Sayfasina Hosgeldiniz</h2>`);
    }
    else{
        res.writeHead(404, {'Content-type':'text/html'});
        res.write("<h1>404 Not Found.</h1>");
    }

    res.end();
})

const port = 5000;

server.listen(port, ()=>{
    console.log(`Sunucu ${port}. portta baslatildi! `)
})