const fs = require('fs');

var user = {
  userId: 2,
  userName: "Rune",
  userLevel: 1000000
};
var userFile = './user_' + user.userId + '.txt';

// Vi kan inte spara ett objekt i en fil, utan måste göra om det till text.
var userTxt = '\n' + JSON.stringify(user);
var options = {encoding: 'utf8', flag: 'a'}

// path, innehåll, options och callback
fs.writeFile(userFile,userTxt, options, (err) => {
  if (err)
    console.error(err)
  else
    console.log("Filen är skriven.");

})
