const fs = require('fs');

var options = {encoding: 'utf8', flag: 'r', highWaterMark: 4};

var fileReadStream = fs.createReadStream('grains.txt', options);

fileReadStream.on('data', (chunk) => {
    console.log(chunk + " " + chunk.length);

})


fileReadStream.on('close', () => {
  console.log("Färdig");
})
