// fs är filesystem i node, dvs den modul vi behöver för att kunna hantera filer.
const fs = require('fs');

// För att öppna en fil (path, metod, callback)
// För metoder, se https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_open_path_flags_mode_callback
fs.open('text.txt', 'r+', function(err, fd) {

  // err är ju det fel som kan uppstå, och det ska vi alltid testa först.
  if (err) {
     return console.error(err);
  }
  console.log("File opened successfully!");

  // fd är file descriptor, vilket vi använder internt, exempelvis för att stänga samma fil inne i callbacken.
  fs.close(fd, (err) => {
    if (err)
      console.error(err);

      console.log("File closed" + fd);
  });
});


// Få info om en fil
fs.stat('text.txt', (err, stats) => {
  if (err) {
     return console.error(err);
  }
  console.log(stats);
  console.log("Got file info successfully!");

  // Check file type
  console.log("isFile ? " + stats.isFile());
  console.log("isDirectory ? " + stats.isDirectory())
})
