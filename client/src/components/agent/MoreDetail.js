import React, { useState, useEffect} from 'react';
import Nav from './Nav';
import { Link } from "react-router-dom";

const MoreDetail = ({ match }) => {
    const [customer, setCustomer] = useState({});
    useEffect(() =>{
        fetchCustomer();
    },[])
    
    const fetchCustomer = async () => {
        const fetchCustomer = await fetch(`/api/${match.params.id}`)
        const customer = await fetchCustomer.json();
        setCustomer(customer);
        console.log(customer);
    };

  return (
    <div className="">
      <Nav />
      <div className="jumbotron jumbotron-fluid" style={{background: "white"}}>
      <div className="container">
      <div>
          <h4>Name: {customer.name}</h4>
          <br/>
          <h6>Company: {customer.companyName}</h6>
          <h6>Email: {customer.email}</h6>
          <h6>Number: {customer.number}</h6>
          <h6>Website: {customer.website}</h6>
          <h6>Company Adress: {customer.companyAddress}</h6>
      </div>
      <br/><br/><Link to="/agent/read" className="btn"> Back </Link>
      </div>
      </div>
    </div>
  );
}

export default MoreDetail;