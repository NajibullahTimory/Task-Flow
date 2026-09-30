const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
const dbAddress = path.join('data.json')



const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    const method = req.method
    const query = new url.parse(req.url, true).query

    if(method == 'GET') {
        const books = fs.readFileSync(dbAddress, 'utf-8')
        res.end(books)
    }
    else if(method == 'POST') {
        const booksJSON = fs.readFileSync(dbAddress, 'utf-8')
        const booksAray = JSON.parse(booksJSON)
        booksAray.push(query)
        fs.writeFileSync(dbAddress, JSON.stringify(booksAray))
        res.end(JSON.stringify(booksAray))
    }
    else {
        res.end('Wrong input tray again...')
    }
})

server.listen(4000, () => console.log('Server is runing in port 4000'))