const fs = require('fs');

var grains = ["Vete", "Havre", "Råg", "Korn"];

var options = {encoding: 'utf8', flag: 'w'};

var fileWriteStream = fs.createWriteStream("grains.txt", options);

fileWriteStream.on("close", () => {
  console.log("Filen är stängd");
});

while (grains.length) {
  let data = grains.pop() + " ";
  fileWriteStream.write(data);
}
fileWriteStream.end();
