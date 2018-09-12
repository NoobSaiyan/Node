var http = require('http');
var fs = require('fs');

http.createServer(function(req,res)
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('index.htm',function(err,data)
    {
        if(err)
        {
            res.writeHead(404);
            res.write('Page not founD')
        }
        else
        {
            res.write(data);
            res.end();
        }
    })
}).listen(process.env.port || 8080);