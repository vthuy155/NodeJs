const express = require('express');
const route = express.Router();
route.get('/news', (req, res) => {
    res.send(
        `<h1>NewsPage</h1>`
    );
});
module.exports = route;
