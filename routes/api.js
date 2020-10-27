const express = require("express");

const  router = express.Router();

const bodyParser = require('body-parser');

const CustomerDetail = require('../models/customerDetail');

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




//Sending Email Route
router.post('/sent', (req,res) => {
    //send email here
  console.log(req.body);
  const output = `
    <p>Record of message from www.clubbookingsite.com</p>
    <h3>Message Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Company: ${req.body.company}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
      <li>Reason: ${req.body.reason}</li>
    </ul>
    <h3>Additional Message</h3>
    <p>${req.body.details}</p>
  `;

  //Node mailer code
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'club.booking.site@gmail.com', // like : abc@gmail.com
        pass: 'MayowaS1'           // like : pass@123
    },
    tls: {
        rejectUnauthorized: false
    }
    });
    
    let mailOptions = {
      from: '"Website Message" <club.booking.site@gmail.com>', // sender address
      to: `club.booking.site@gmail.com, ${req.body.email}`, // list of receivers
      subject: "Website Contact Form Message", // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         return console.log(error);
      }
    console.log('success');
    res.json({
        msg: 'Message Recived!!!'
    }); 
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