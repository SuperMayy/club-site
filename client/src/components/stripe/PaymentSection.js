import React from 'react';
import Header from '../customer/Header';
import Footer from '../customer/Footer';
import Stripe from './Stripe';
import CssBaseline from '@material-ui/core/CssBaseline';

const PaymentSection = () => {
    

    return(
        <div>
            <Header/>
            <br/><br/>
             <h1 style={{textAlign: "center"}}>Payment</h1>
             <CssBaseline />
             <Stripe/>
            <Footer/>
        </div>
        
    )
}

export default PaymentSection;