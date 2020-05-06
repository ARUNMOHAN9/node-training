const fs = require('fs');

const reqHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input name="message"/><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        let body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            let parsedData = Buffer.concat(body).toString();
            fs.writeFileSync('msg.txt', parsedData);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Test Page</title></head>');
    res.write('<body>Hello World</body>');
    res.write('</html>');
    res.end();
}

module.exports = reqHandler;