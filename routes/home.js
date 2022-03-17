const express = require('express');
const route = express.Router();
route.get('/', (req, res) => {
    res.send(
        `<h1>HomePage</h1>
        <p>Sample Text</p>`
    );
});
module.exports = route;