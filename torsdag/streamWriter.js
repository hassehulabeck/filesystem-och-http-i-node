const fs = require('fs');

var grains = ['Havre', 'Vete', 'Råg', 'Korn'];

var path = './grains.txt';

var fileWriteStream = fs.createWriteStream(path);

fileWriteStream.on('close', () => {
  console.log ("filen är skapad.");
});

while(grains.length) {
  let data = grains.pop() + " ";
  fileWriteStream.write(data);
}

fileWriteStream.end();
