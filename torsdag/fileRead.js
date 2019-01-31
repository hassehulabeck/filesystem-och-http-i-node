const fs = require('fs');

var path = 'user_2.txt';

var options = {
  encoding: 'utf8',
  flag: 'r'
};

// readFile läser allt innehåll i filen i ett stycke.
fs.readFile(path, options, (err, data) => {
  if (err) {
    console.error(err);
  }
  else {
    var user = JSON.parse(data);
    console.log(`
      Användaren heter ${user.userName}
      och har userLevel ${user.userLevel}.
    `);
  }
});
