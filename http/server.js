const http = require('http');

const webbserver = http.createServer((req, res) => {
  res.write("Hej");
  res.end();
});

webbserver.listen(3000, () => {
  console.log("Servern nu igång på 3000")
});
