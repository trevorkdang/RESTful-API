require('dotenv').config(); //includes the .env module
const http = require('http'); //imports http module
const app = require('./index'); //imports the express app

const server = http.createServer(app); //creates http server
console.log("Server is connected at port:" + process.env.PORT);
server.listen(process.env.PORT); //listens for port and starts the server