//node js server from scratch
const express = require('express');
const router = express.Router();


router.get('/demo1', (req, res, next) => {
    
    console.log("I am in demo1 API.");
    
    
});


router.get('/demo2', (req, res, next) => {
    
    let info = req.body; //creates an object out of that
    
    console.log(info.name);
    console.log(info.lastname);

    return res.status(200).json({ message: "Everything is working just fine" });
    
});

router.get('/addnum', (req, res, next) => {
    
    let info = req.body; //creates an object out of that
    
    let num1 = info.num1;
    let num2 = info.num2;
    //have to put an if statement here to make sure that both values are correct, verifies it is a num
    console.log(info.num1);
    console.log(info.num2);

    return res.status(200).json({ message: "Everything is working just fine", sum:"1" });//after adding numbers, just add it to the message
    //have to return 500 if not correct
});


module.exports = router;