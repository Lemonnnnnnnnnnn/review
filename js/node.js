const http = require('http')

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    req.on('data', (chunk) => {
        console.log(chunk.toString())
    })
    res.end('123')
}).listen(4000)
console.log('服务器已运行再localhost:4000中')
