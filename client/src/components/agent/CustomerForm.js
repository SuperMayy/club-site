import React from 'react';
import { useForm } from "react-hook-form";
import {useHistory} from "react-router-dom";

export const CustomerFrom = ({ customer, match, onSubmit }) => {

    const {register, handleSubmit} = useForm({ 
        defaultValues: {
          name: customer ? customer.name : "", 
          companyName: customer ? customer.companyName : "",
          email: customer ? customer.email : "",
          number: customer ? customer.number : "",
          website: customer ? customer.website : "",
          companyAddress: customer ? customer.companyAddress : ""
        }
      });
      const history = useHistory();
    
      const submitHandler = handleSubmit((data) => {
        onSubmit(data)
        console.log(match);
        history.push(`/agent/read`)
      })

      
    return(
        <div className="">
      <div className="jumbotron jumbotron-fluid">
      <div className="container">
      <div className="card">
      <h3 className="card-header">Edit Customer Data</h3>
      <div className="card-body">
      <form onSubmit={submitHandler}> 
      <div className="input-group">
               <input 
               className="form-control"
               type="text"
               name="name"
               placeholder="Enter Name"
               ref={register}
               />
             </div>
             <div className="input-group">
               <input 
               className="form-control"
               type="text"
               name="companyName"
               placeholder="Enter Company Name"
               ref={register}
               />
             </div>
             <div className="input-group">
               <input 
               className="form-control"
               type="text"
               name="email"
               placeholder="Enter Email"
               ref={register}
               />
             </div>
             <div className="input-group">
               <input 
               className="form-control"
               type="text"
               name="number"
               placeholder="Enter Number"
               ref={register}
               />
             </div>
             <div className="input-group">
               <input 
               className="form-control"
               type="text"
               name="website"
               placeholder="Enter Website"
               ref={register}
               />
             </div>
             <div className="input-group">
               <textarea 
               className="form-control"
               name="companyAddress"
               cols="30"
               row="10"
               placeholder="Enter Company Address"
               ref={register}
               />
             </div>
             <button type="submit" className="btn btn-primary">submit</button>
      </form>
      </div>
    </div>
    </div>
    </div>
    </div>
    );
}