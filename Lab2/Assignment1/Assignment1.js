const fs = require('fs');
const sourceFile = 'source.txt';
const destinationFile = 'destination.txt';

if (fs.existsSync(sourceFile)) {
  fs.readFile(sourceFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading source file:', err);
      return;
    }

    fs.writeFile(destinationFile, data, (err) => {
      if (err) {
        console.error('Error writing to destination file:', err);
        return;
      }
      console.log('File copied successfully from source.txt to destination.txt.');
    });
  });
} else {
  console.error('Error: source.txt does not exist.');
}