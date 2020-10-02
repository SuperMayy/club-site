import React from 'react';
import axios from 'axios';

class CreateCustomerForm extends React.Component {

    state = {
        name: "",
        companyName: "",
        email: "",
        number: "",
        website: "",
        companyAddress: ""
    };

    handleChange = (event) => {
        const target  = event.target;
        const name = target.name;
        const value= target.value;

        this.setState({
            [name]: value
        });
    };

    submit = (event) => {
        event.preventDefault();

        const payload = {
            name: this.state.name,
            companyName: this.state.companyName,
            email: this.state.email,
            number: this.state.number,
            website: this.state.website,
            companyAddress: this.state.companyAddress
        };

        axios({
            url: '/api/save',
            method: 'POST',
            data: payload
        })
         .then(() => {
             console.log('Data has been sent to the server!');
         })
         .catch(() => {
            console.log('Internal server error');
        });


    };

    render() {

        console.log('State: ', this.state);
        //JSX
        return(
            <div>
             <h2>Create Customer</h2>
             <form onSubmit={this.submit}>
             <div className="form-input">
               <input 
               type="text"
               name="name"
               placeholder="Enter Name"
               value={this.state.name}
               onChange={this.handleChange}
               />
             </div>
             <div className="form-input">
               <input 
               type="text"
               name="companyName"
               placeholder="Enter Company Name"
               value={this.state.companyName}
               onChange={this.handleChange}
               />
             </div>
             <div className="form-input">
               <input 
               type="text"
               name="email"
               placeholder="Enter Email"
               value={this.state.email}
               onChange={this.handleChange}
               />
             </div>
             <div className="form-input">
               <input 
               type="text"
               name="number"
               placeholder="Enter Number"
               value={this.state.number}
               onChange={this.handleChange}
               />
             </div>
             <div className="form-input">
               <input 
               type="text"
               name="website"
               placeholder="Enter Website"
               value={this.state.website}
               onChange={this.handleChange}
               />
             </div>
             <div className="form-input">
               <textarea 
               name="companyAddress"
               cols="30"
               row="10"
               placeholder="Enter Company Address"
               value={this.state.companyAddress}
               onChange={this.handleChange}
               />
             </div>
             <button>submit</button>
             </form>
            </div>
        );
    }
}

export default CreateCustomerForm;