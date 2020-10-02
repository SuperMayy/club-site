const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const CustomerDetailSchema = new Schema({
    name: String,
    companyName: String,
    email: String,
    number: String,
    website: String,
    companyAddress: String,
    date: {
        type: String,
        default: Date.now()
    } 
});

//Model
const CustomerDetail = mongoose.model('CustomerDetail', CustomerDetailSchema);

module.exports = CustomerDetail;