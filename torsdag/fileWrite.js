const fs = require('fs');

var user = {
  userId: 2,
  userName: "Olle",
  userLevel: 100
};

var path = './user_' + user.userId + '.txt';

var userTxt = JSON.stringify(user);

var options = {encoding: 'utf8', flag: 'w+'};

fs.writeFile(path, userTxt, options, (err) => {
  if (err)
    console.error(err);
  else {
    console.log("Filen är sparad");
  }
})
