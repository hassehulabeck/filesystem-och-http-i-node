const fs = require('fs');
const http = require('http');

var path = './webbpage.txt';
var options = {
  encoding: 'utf8',
  flag: 'r'
};

fs.readFile(path, options, (err, data) => {
  if (err) {
    console.error(err);
  }
  else {
    // Starta en server och skicka upp den inlästa filen dit.
    var server = http.createServer((req, res) => {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.write(data);
      res.end();
    })
    server.listen(3000, () => {
      console.log("Server now active at localhost:3000");
    })
  }
})
