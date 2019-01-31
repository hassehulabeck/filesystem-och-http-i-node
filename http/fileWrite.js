const fs = require('fs');

var content = `<h1>Välkommen</h1>
<p>Det här är text på en webbsida.</p>`;

var path = './text.txt';

var options = {encoding: 'utf8', flag: 'w+'};

fs.writeFile(path, content, options, (err) => {
  if (err)
    console.error(err);
  else {
    console.log("Filen är sparad");
  }
});
