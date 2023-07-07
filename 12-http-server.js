const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end("Welcome to our home page")
    }

    if(req.url === '/about'){
        res.end("This is our about page")
    }

    res.end(
        `<h1>Ooops!!! Not found`
    )
})

server.listen(5001)