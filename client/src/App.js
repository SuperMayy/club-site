import React from 'react';
// import Stripe from './components/stripe/Stripe';
import './App.css';
//import CreateCustomerForm from './components/agent/CreateCustomerForm';
import GetCustomerTable from './components/agent/GetCustomerTable';

function App() {
  return (
    <div className="App">
      {/*<Stripe />*/}
      {/*<CreateCustomerForm/>*/}
      <GetCustomerTable />
    </div>
  );
}

export default App;
