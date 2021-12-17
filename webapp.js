const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  // res.end('Hello World');

  const html = fs.readFileSync('./index.html', 'utf-8');
  res.write(html);

  res.end();
});

server.listen(port, function(){
  console.log(`Server is listening on port ${port}`);
});