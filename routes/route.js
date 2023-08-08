const express = require('express');
const router = express.Router();
const fs = require('fs');

const ReadArchive = async (url) => {
    const response = await fetch(url);
    const status = response.status;
    const data = await response.json();
    return {data, status};
}

router.get('./tweet', async (req, res, next) => {
    const data = await ReadArchive()
});

router.get('./tweet', async (req, res, next) => {
    const response = await fetch (url);
    const status = response.status;
    const data = await response.json();
    return {data, status};
});

modele.exports = router;