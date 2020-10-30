const express = require("express");

const  router = express.Router();

const bodyParser = require('body-parser');

const CustomerDetail = require('../models/customerDetail');

const nodemailer = require('nodemailer');

const stripe = require('stripe')('sk_test_51HNmqhBRlnUVKZqLSsRkEsUxGrvTZLYaBo7UlCXXesqFzvmDhXFtNp3zo0tN9e1O6pJSaJzfhZgRPOslhNOAre5K00mRvuOwx0');

//Creat POST Request
router.post('/save', (req, res) => {
  console.log('Body: ', req.body);
  const data = req.body;

  const newCustomerDetail = new CustomerDetail(data); 

  // .save
  newCustomerDetail.save((error) => {
    if(error) {
      res.status(500).json({msg: 'Sorry, internal server errors'});
    } else {
      res.json({
        msg: 'Your data has been saved!!!'
      });
    }
  });
});


//Read GET Request
router.get('/', (req, res) => {

    CustomerDetail.find({ })
    .then((data)=> {
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=> {
        console.log('Error: ', error);
    });

});

//Update PUT Request
router.put('/:id', (req, res, next) => {
    console.log(req.body);

    CustomerDetail.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        if(!data){
          res.status(400).send("Customer not found")
        } else {
          if(error){ 
            return next(err);
        }
        res.json(data);
        }
      }
    );
});


//Read Get By ID
router.get('/:id', (req, res, next) => {

    CustomerDetail.findById(req.params.id, (error, data) => {
       if (error) {
        return next(error);
       } else {
        res.json(data);
       }
    });
});

//Delete 
router.delete("/:id", (req, res, next) => {

    CustomerDetail.findByIdAndRemove(req.params.id, req.body, (error, data) => {
     if (error){
        return next(error);
     } else {
        res.json(data);
     }
    });
});




//Send Route for Contact Form
router.post('/sent', (req, res) => {
  //send email here
  console.log('Body: ', JSON.stringify(req.body));
  const output = `
    <p>Record of message sent at Club Site</p>
    <h3>Booking Details</h3>
    <ul>
      <li>Name: ${req.body.fullname}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Additional Message</h3>
    <p>${req.body.emailBody}</p>
  `;

  //Node mailer code
  let transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secureConnection: false, // TLS requires secureConnection to be false
    auth: {
        user: 'testerformreciver9920@outlook.com', // like : abc@gmail.com
        pass: 'Thisisapassword9920'           // like : pass@123
    },
    tls: {
      ciphers:'SSLv3'
    }
    });
    
    let mailOptions = {
      from: '"Club Site Message" <testerformreciver9920@outlook.com>', // sender address
      to: `testerformreciver9920@outlook.com`, // list of receivers
      subject: "Club Site Website Contact Form Message", // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         return console.log(error);
      } else {
        console.log('success');
        res.render('contact', {mg:'Message has been sent'});
      }
    }); 
});

//Stripe Subscription payment
router.post('/pay', async (req, res) => {
    const {email} = req.body;
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 3000,
        currency: 'gbp',
        // Verify your integration in this guide by including this parameter
        metadata: {integration_check: 'accept_a_payment'},
        receipt_email: email,
      });

      res.json({'client_secret': paymentIntent['client_secret']})
})

router.post('/sub', async (req, res) => {
  const {email, payment_method} = req.body;

  const customer = await stripe.customers.create({
    payment_method: payment_method,
    email: email,
    invoice_settings: {
      default_payment_method: payment_method,
    },
  });

  const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [{ plan: 'plan_G......' }],
    expand: ['latest_invoice.payment_intent']
  });
  
  const status = subscription['latest_invoice']['payment_intent']['status'] 
  const client_secret = subscription['latest_invoice']['payment_intent']['client_secret']

  res.json({'client_secret': client_secret, 'status': status});
})

module.exports = router;