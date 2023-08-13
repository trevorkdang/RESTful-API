const express = require('express'); //imports express
const router = express.Router(); //creates a router
const fs = require('fs'); //imports file system module
const jsonFilePath = './data.json'; //this is the path to the JSON file

//function that reads the JSON file
const ReadArchive = () => {
    const data = fs.readFileSync(jsonFilePath, 'utf8'); //reads the json file
    return JSON.parse(data); //used to parse data in json file and convert to JS object
}

//gets all tweets
router.get('/tweets', (req, res) => {
    const data = ReadArchive();
    if (data != null || data != undefined){
        res.send(data);
    }
    else {
        return res.status(404).json({"message":"Error obtaining tweets!"}); //simple error checking
    }
});

//gets all users
router.get('/users', (req, res) => {
    const data = ReadArchive();
    if (data != null || data != undefined){ //error checking
        const users = []; //array to hold users
        for (const tweets of data) { //for loops to search for users in data
            if (!users.includes(tweets.user.screen_name)) { //if statement that checks if user
                users.push(tweets.user.screen_name); //pushes the user into the array
            }
        }
        res.send(users);
    }
    else {
        return res.status(404).json({"message": "Error obtaining users!"});
    }
});

//gets all external links
router.get('/external_links', (req, res) =>{
    const data = ReadArchive();
    if (data != null || data != undefined){ //error checking
        const links = []; //similar to users
        for (const tweets of data) { //loops to search through the json tweets and data
            for (const link of tweets.entities.urls) {
                if (!links.includes(link.url)) {
                    links.push(link.url);
                }
            }
        }
        res.send(links);
    }
    else {
        return res.status(404).json({"message": "Error external links!"});
    }
});

//gets all tweets by ID
router.get('/tweets/:id', (req, res) => {
    const data = ReadArchive();
    const id = req.params.id;//takes the id from the URL
    const idNum = Number(id); //converts id to number so that comparison is correct
    const tweet = data.find(tweet => tweet.id === idNum);// searches for tweet object
    if (tweet) {
        res.send(tweet); //sends back the response
    }
    else {
        res.status(404).json({"message":"Error! Tweet not found!"});
    }
});

//gets all users by screen name
router.get('/users/:screen_name', (req, res) => {
    const data = ReadArchive();
    const screen_name = req.params.screen_name; //takes the screen name from URL
    const user = data.find(tweet => tweet.user.screen_name === screen_name); //searches for the user object
    if (user) {
        res.send(user); //sends back the response
    }
    else {
        res.status(404).json({"message":"Error! User not found!"});
    }
});

module.exports = router;