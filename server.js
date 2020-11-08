const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);


const app = express();

const PORT = process.env.PORT || 8080;

//Bringing in the routes
const routes = require('./routes/api');

//Connect to MongoDB Database
const MONGODB_URI = 'mongodb+srv://mayowa:mayowa@mainclubbookingsitedb.xd7zg.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!')
});

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//HTTP request logger
app.use(morgan('tiny'));
//Configuring Routes
app.use('/api', routes);

//Put React CLient into server when running on heroku

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT, console.log(`Server is running on ${PORT}`));