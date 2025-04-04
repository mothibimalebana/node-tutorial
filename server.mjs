import {createServer} from 'http'

const server = createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'});
    res.write(req.url);
    res.end();
})

server.listen(3300, '127.0.0.1', () => {
    console.log(`Server is running`)
})