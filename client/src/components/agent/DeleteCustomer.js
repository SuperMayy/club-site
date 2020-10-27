import React, { useState, useEffect} from 'react';
import Nav from './Nav';

function DeleteCustomer({ match }) {
    // const [customer, setCustomer] = useState({});
    useEffect(() =>{
        deleteCustomer();
    },[])

    const deleteCustomer = async () => {
        const deleteCustomer = await fetch(`/api/${match.params.id}`, {
            method: 'DELETE',
          })
        // const customer = await fetchCustomer.json();
        .then(res => {
            res.json()
            if (window.confirm('The customer was succesfully deleted.')) 
            {
                window.location.href='/agent/read'
            };
        })
    };

  return (
    <div className="AgentSite">
      <Nav />
      
    </div>
  );
}

export default DeleteCustomer;