import React, {useState, useEffect} from 'react';
import Nav from './Nav';
import { CustomerFrom } from './CustomerForm';
import { useRouteMatch, useHistory } from "react-router-dom";

const EditCustomerData = () => {
  const match = useRouteMatch();
  const [customer, setCustomer] = useState();
  const history = useHistory();
 

  useEffect(() => {
   const fetchCustomer = async() => {
     const getCutomer = (id) => fetch(`/api/${match.params.id}`).then(res => res.json());
     const customer = await getCutomer(match.params.id);
     setCustomer(customer);
   }
   fetchCustomer();
  }, []);

  const onSubmit = async (data) => {
    const updateCustomer = (customer) => fetch(`/api/${match.params.id}`, {
      method: 'PUT',
      headers: {
        "Accept": "application/json",
        "Content-Type": "Application/json"
    },
      body: JSON.stringify(customer)
    })
    await updateCustomer(data, match.params.id);
    history.push(`/agent/read`);
  }


  return customer ? (
    <div>
      <Nav />
      <CustomerFrom customer={customer} onSubmit={onSubmit}/>
    </div>
  ) : <div>Loading...</div>
  
}

export default EditCustomerData;