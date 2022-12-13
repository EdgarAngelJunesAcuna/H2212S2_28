const express= require('express');



const server = http.createServer((req, res) =>{
    res.end('welcome')
})

server.listen(3000);
console.log('Server on port 3000');