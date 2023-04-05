const http = require('http')

const server = http.createServer((req, res)=> {
    if(req.url === '/'){
        res.end('Welcome to my web page')
    }
    if(req.url === '/about'){
        res.end('this is the about page')
    }
    res.end(`<h1>Oops! No page found</h1><a href = '/'>back</a>`)
})

server.listen(5000)