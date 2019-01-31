const fs = require('fs');

var user = [
  {
    userId: 1,
    userName: "Ahmed",
    userLevel: 10000
  },
  {
    userId: 2,
    userName: "Olle",
    userLevel: 100
  }
];

var paths = []; // en array för de filer vi vill spara.

// Ta emot argumenten som antas skrivas in efter node-kommandot,
// dvs. "node multiWriter.js 1 2"
process.argv.forEach((val, index) => {
  // De två första argumenten (0 och 1) är "node" och "multiWriter.js"
  if (index > 1) {
      paths.push('./user_' + val + '.txt');
  }
});


var options = {encoding: 'utf8', flag: 'w+'};

paths.forEach((path, index) => {

  var userTxt = JSON.stringify(user[index]);

  fs.writeFile(path, userTxt, options, (err) => {
    if (err)
      console.error(err);
    else {
      console.log("Filen är sparad");
    }
  })
});
