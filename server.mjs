import {createServer} from 'http';
import url from 'url';
import fs from 'fs'

const server = createServer((req, res) => {    
    const q = url.parse(req.url, true);
    const currentPage = q.pathname;
    const filename = '.' + currentPage + '.html';
    fs.readFile(filename, (err, data) => {
        if(err){
            res.writeHead(404, {'content-type': 'text/html'})
            return res.end('404 Not Found')
        }
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(data);
        return res.end()
    })

}).listen(8080, () => {
    console.log('Server is listening')
})