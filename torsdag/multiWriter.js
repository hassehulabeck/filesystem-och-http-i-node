const fs = require('fs');

var users = [
  {
    userId: 1,
    userName: "Volmar",
    userLevel: 1001,
    userImg: "img/volmar.gif"
  },
  {
    userId: 2,
    userName: "Olle",
    userLevel: 100
  },
  {
    userId: 3,
    userName: "Frida",
    userLevel: 1,
    userStatus: "Cool"
  }
];

var paths = []; // en array för de filer vi vill spara.
var indexes = []; // en array för de argument som skickas med.

// Ta emot argumenten som antas skrivas in efter node-kommandot,
// dvs. "node multiWriter.js 1 2"
process.argv.forEach((val, index) => {
  // De två första argumenten (0 och 1) är "node" och "multiWriter.js"
  if (index > 1) {
      paths.push('./user_' + val + '.txt');
      // I indexes lägger jag in den siffra man skriver, minus 1, för
      // att få rätt index i arrayen users.
      indexes.push(val - 1);
  }
});


var options = {encoding: 'utf8', flag: 'w+'};

paths.forEach((path, index) => {

  // Hitta rätt user, utifrån det index som vi sparat i arrayen indexes.
  // Det GÅR att skriva renare kod än så här, men det funkar....
  var userTxt = JSON.stringify(users[indexes[index]]);

  fs.writeFile(path, userTxt, options, (err) => {
    if (err)
      console.error(err);
    else {
      console.log("Filen är sparad");
    }
  })
});
