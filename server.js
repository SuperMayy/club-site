const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const stripe = require('stripe')('sk_test_51HNmqhBRlnUVKZqLSsRkEsUxGrvTZLYaBo7UlCXXesqFzvmDhXFtNp3zo0tN9e1O6pJSaJzfhZgRPOslhNOAre5K00mRvuOwx0');


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

app.listen(PORT, console.log(`Server is running on ${PORT}`));