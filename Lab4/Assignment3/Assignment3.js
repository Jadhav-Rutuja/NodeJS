const fs = require('fs');

// Step 1: Read data from 'input.txt'
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err.message);
        return;
    }
    console.log('Step 1: Read complete');

    // Step 2: Append additional text to the data
    const updatedData = data + '\nAppended text: Node.js is a JavaScript runtime environment.';

    fs.appendFile('log.txt', 'Appended data to content.\n', (err) => {
        if (err) {
            console.error('Error writing log:', err.message);
            return;
        }
        console.log('Step 2: Log written');

        // Step 3: Write the updated data to 'output.txt'
        fs.writeFile('output.txt', updatedData, (err) => {
            if (err) {
                console.error('Error writing to output file:', err.message);
                return;
            }
            console.log('Step 3: Write complete - Data saved to output.txt');
        });
    });
});