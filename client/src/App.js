import React from 'react';
// import Stripe from './components/stripe/Stripe';
// import './App.css';
import CreateCustomerForm from './components/agent/CreateCustomerForm';
import GetCustomerData from './components/agent/GetCustomerData';
import EditCustomerData from './components/agent/EditCustomerData';
import AgentHome from './components/agent/AgentHome';
import MoreDetail from './components/agent/MoreDetail';
import DeleteCustomer from './components/agent/DeleteCustomer';
import Home from './components/customer/Home';
import FormSent from './components/customer/FormSent';
import CustomerSetUp from './components/customer/CustomerSetUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PaymentSection from './components/stripe/PaymentSection';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/agent/create" component={CreateCustomerForm}/>
        <Route path="/agent/read" exact component={GetCustomerData}/>
        <Route path="/agent/update/:id" component={EditCustomerData}/>
        <Route path="/agent" exact component={AgentHome}/>
        <Route path="/agent/read/:id" component={MoreDetail}/>
        <Route path="/agent/delete/:id" component={DeleteCustomer}/>
        <Route path="/" exact component={Home}/>
        <Route path="/formsent" exact component={FormSent}/>
        <Route path="/payment" exact component={PaymentSection}/>
        <Route path="/setup" exact component={CustomerSetUp}/>
      </Switch> 
    </div>
    </Router>
  );
}

export default App;
