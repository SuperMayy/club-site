import React from 'react';
// Components
import HomePage from './HomePage';
// Stripe
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import './index.css';

// import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51HNmqhBRlnUVKZqLxvciKAeVTJXA6EA48nsHWoiml6EksDI4jqCjgytR9R3hlPkMwFIMgjXG3P4yb7QbIODKd8TR00g3KlvJVs");

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

