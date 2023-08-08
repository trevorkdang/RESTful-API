const express = require('express'); //library node responsible to '/test' routing
const cors = require('cors'); //use for server like Amazon, dont have to really have it


//Custome backend APIs
const testRoute = require('./routes/test'); //creates an object from the test module
const usersRoute = require('./routes/users'); //creates an object from user module
const routeRoute = require('./routes/route');

const app = express(); //creates an object from express
app.use(cors()); //for security measure dont have to have it

app.use(express.urlencoded({extended: true})); //encodes all the urls that are going to be presented in the express app
app.use(express.json()); //express is json based
app.use('/test', testRoute); //show all and makes all the routes accessible in our system
app.use('/users', usersRoute);
app.use('/route', routeRoute);

const json_file = './data/sample2.json';
app.get('/archive', (req, res) => {
    res.json(require(json_file));
});

module.exports = app;