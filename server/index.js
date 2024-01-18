require('dotenv').config();
const express = require('express');
const server = express();
const port = process.env.port

server.get('/', function(request, response){
    response.send('hello this is our backend server')
})


server.listen(port, function(){
    console.log(`we are live on port ${port}...`)
})
