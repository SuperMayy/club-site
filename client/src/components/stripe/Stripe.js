import React from 'react';
// Components
import StripePage from './StripePage';
// Stripe
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
// Styles
import './index.css';
import CssBaseline from '@material-ui/core/CssBaseline';

const stripePromise = loadStripe('pk_test_51HNmqhBRlnUVKZqLxvciKAeVTJXA6EA48nsHWoiml6EksDI4jqCjgytR9R3hlPkMwFIMgjXG3P4yb7QbIODKd8TR00g3KlvJVs');

function Stripe() {
  return (
    <>
    <CssBaseline />
    <Elements stripe={stripePromise}>
      <StripePage />
    </Elements>
    </>
  );
}

export default Stripe;