const express = require('express'); //library node responsible to '/test' routing
const cors = require('cors'); //use for server like Amazon, dont have to really have it
const path = require('path');//path module used for files and directories

//Custom backend APIs
const routeRoute = require('./route'); //creates an object from the route module

const app = express(); //creates an object from express
app.use(cors()); //for security measure dont have to have it

app.use(express.urlencoded({extended: true})); //encodes all the urls that are going to be presented in the express app
app.use(express.json()); //express is json based
app.use(express.static(path.join(__dirname))); //used for static files
app.use('/', routeRoute);

module.exports = app;