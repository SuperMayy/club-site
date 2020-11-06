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
      <h3 className="agent-header">Customer Data</h3>
      <div className="table-content">
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
                            <Link className="getlinks" to={`/agent/read/${customer._id}`}>More </Link>
                            <Link className="getlinks" to={`/agent/update/${customer._id}`}>Edit </Link>
                            <Link className="getlinks" to={`/agent/delete/${customer._id}`}>Delete</Link>
                        </td>
                      </tr>
                  ))
              }
          </tbody>
      </table>
      </div>
    </div>
  );
}

export default GetCustomerData;