const http = require('http');

const server = http.createServer(()=>{
    
    const url = get.url;  // after 'url/'
})

const port = 5000;

server.listen(port, ()=>{
    console.log(`Sunucu ${port}. portta baslatildi! `)
})