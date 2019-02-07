const express = require('express');
const bodyParser = require('body-parser');

const coffee = require('./routes/coffee.route');
const app = express();

const { mongoose } = require('./db/mongoose_connection');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/coffee', coffee);

let port = 3004;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

module.exports = {
    app
}