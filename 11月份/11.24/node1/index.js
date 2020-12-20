const http = require('http')

const hostname = '127.0.0.1'

const port = 3000

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    // res.end('Hello Alex');
    // res.end('你好，世界！');
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end('<h1>你好，世界！</h1>');
})

server.listen(port, hostname => {
    console.log('服务器已经启动了~');
})