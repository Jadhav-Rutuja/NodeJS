const fs = require('fs');


fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        
        console.error('Error reading file:', err.message);
    } else {
        console.log('File Contents:');
        console.log(data);
    }
});