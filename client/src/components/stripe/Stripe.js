import React, {useEffect} from 'react';
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
    useEffect(() => {
        console.log("Stripe", keys.stripePublishableKey)
        console.log(typeof keys.stripePublishableKey)
    })

    return(
        <div>
            <Elements stripe={stripePromise}>
            <HomePage />
            </Elements>
        </div>
        
    )
}

export default Stripe;

