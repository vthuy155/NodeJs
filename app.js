// B1: include thư viện http 
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send(
        `<h1>HomePage</h1>`
    );
});
app.get('/products', (req, res) => {
    res.send(
        `<h1>ProductPage</h1>`
    );
});
app.get('/news', (req, res) => {
    res.send(
        `<h1>NewsPage</h1>`
    );
});


// B2: khởi tạo server
// const server = http.createServer((req, res) => {
//     // console.log(req.url);
//     // console.log("Hello");
//     if(req.url === '/'){
//         // console.log("HomePage");
//         res.setHeader('Content-Type', 'text/html');
//         res.write("<h1>Home Page</h1>")
//         res.end;
//     }
//     if(req.url === '/products'){
//         // console.log("Product Page");
//         res.setHeader('Content-Type', 'text/html');
//         res.write("<h1>Product Page</>");
//         res.end;
//     }
//     if(req.url === '/news'){
//         // console.log("Product Page");
//         res.setHeader('Content-Type', 'text/html');
//         res.write("<h1>News Page</>");
//         res.end;
//         // abc
//     }
// });
// B3: Lắng nghe cổng thực thi
const port = 3001;
server.listen(port, () => {
    console.log(`Server is running on ${port}`);
});