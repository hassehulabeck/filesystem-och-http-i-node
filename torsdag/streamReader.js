const fs = require('fs');

var path = './grains.txt';

var options = {
  encoding: 'utf8',
  flag: 'r',
  highWaterMark: 8 // Storlek på chunk.
};

var fileStreamReader = fs.createReadStream(path, options);

fileStreamReader.on('close', () => {
  console.log("Färdig");
});

fileStreamReader.on('data', (chunk) => {
  console.log(chunk);
});
