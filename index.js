const express  = require('express');
const {createServer} = require('node:http');

const app = express();
const server = createServer(app);


app.get('/', (req, res)=> {
    res.send('<h1>Hello world</h1>');
})

server.listen(4000, ()=> {
    console.log('Server running at http://localhost:4000');
})
