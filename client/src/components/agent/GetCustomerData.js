import React, { useState, useEffect} from 'react';
import Nav from './Nav';
import { Link } from "react-router-dom";

const GetCustomerData = () => {
    const [customers, setCustomers] = useState([]);
    useEffect(() =>{
        fetchCustomers();
    },[])
    
    const fetchCustomers = async () => {
        const data = await fetch('/api/');
        const customers = await data.json();
        console.log(customers);
        setCustomers(customers);
    }
    

  return (
    <div className="">
      <Nav />
      <h3>Customer Data</h3>
      <table className="table table-triped mt-3">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
              {
                  customers.map(customer => (
                      <tr key={customer._id}> 
                        <td>
                            {customer.name}
                        </td>
                        <td>
                            {customer.companyName}
                        </td>
                        <td>
                            {customer.email}
                        </td>
                        <td>
                            <Link style={{color: "black"}} to={`/agent/read/${customer._id}`}>More </Link>
                            <Link style={{color: "black"}} to={`/agent/update/${customer._id}`}>Edit </Link>
                            <Link style={{color: "black"}} to={`/agent/delete/${customer._id}`}>Delete</Link>
                        </td>
                      </tr>
                  ))
              }
          </tbody>
      </table>
    </div>
  );
}

export default GetCustomerData;