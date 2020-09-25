const express = require('express');

const app = express();

let currentHour = new Date().getHours()+10;
console.log(currentHour);

app.get('/', (req, res) => {
 if ((currentHour>8) && (currentHour<17)) res.sendFile(__dirname + '/public/HomePage.html');
 else res.sendFile(__dirname + '/public/Close.html');
});

app.use(express.static(__dirname + '/public'));


app.listen(4000, (error) => {
    if (error) console.log('Server is not running')
    else console.log('Server is running on port 4000')
})