const https = require('https');

const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTK5WZPJD05FoMonO805j9HIUeBuHQWzdHDrtnHo5EE4bjya6aYCw2yI2B-1hitcxXs3X0VvykFLcoS/pub?output=csv';

https.get(url, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        const lines = data.split('\n');
        console.log('Headers:', lines[0]);
        console.log('First Row:', lines[1]);
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});
