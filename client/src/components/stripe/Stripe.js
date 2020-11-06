import React from 'react';
import keys from '../../config/keys';
// Components
import HomePage from './HomePage';
// Stripe
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import './index.css';

// import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(keys.stripePublishableKey);

const Stripe = () => {
    

    return(
        <div>
            <Elements stripe={stripePromise}>
            <HomePage />
            </Elements>
        </div>
        
    )
}

export default Stripe;

