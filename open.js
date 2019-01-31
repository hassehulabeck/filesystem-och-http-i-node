const fs = require('fs');

fs.open('./torsdag.txt', 'w+', (err, fd) => {
  if (err) {
    console.error(err);
  }
  else {
    console.log("Filen finns" + fd);
  }
})
