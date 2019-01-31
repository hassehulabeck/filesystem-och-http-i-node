const https = require('https');

https.get('https://www.hulabeck.se/html/temp/products.json', (res) => {
  console.log(res.statusCode);

  if (res.statusCode == 200) {
    var rawData = "";
    res.on('data', (chunk) => {
      rawData += chunk;
    })
    res.on('end', () => {
      var parsedData = JSON.parse(rawData);
      console.log(parsedData);
    })
  }
});
