const http = require('http');
const fs = require('fs');
const port = 3000;

// This is our first full stack web app. Amazing huh?

const server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});

  const html = fs.readFileSync('./index.html', 'utf-8'); // Sets the header for html file
  res.write(html); // sending html file to the browser in form of variable!

  res.end();
});

server.listen(port, function(){
  console.log(`Server is listening on port ${port}`);
});