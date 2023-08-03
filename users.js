const express = require('express');
const router = express.Router();
const archive_url = 'http://localhost:8080/archive';

const ReadArchive = async (url) => {
    const response = await fetch(url);
    const status = response.status;
    const data = await response.json();
    return {data, status};
}

//needs more error checking
//below is simple api
router.get('/get_user_info', async (req, res, next) => {
    const data = await ReadArchive(archive_url);
    if (data != null){
        //json parsing
        return res.status(200).json(data); //just returns the entire data
    }
    else {
        return res.status(401).json({"message":"Error!"}); //simple error checking
    }
});

module.exports = router;