import {createServer} from 'http';
import url from 'url';

const server = createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'});
    
    const q = url.parse(req.url, true);
    const currentPage = q.pathname

    res.write(`${q.pathname}`);

    res.end();
}).listen(8080, () => {
    console.log('Server is listening')
})