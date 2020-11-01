import React from 'react';
import axios from 'axios';
import Header from '../customer/Header';
import Footer from '../customer/Footer';
import "../../App.css"

class CustomerSetUp extends React.Component {

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
            //  Redirect to a diffrent page
             this.props.history.push("/");
         })
         .catch(() => {
            console.log('Internal server error');
        });


    };

    render() {

        console.log('State: ', this.state);
        //JSX
        return(
            <>
            <Header />
            <div className="jumbotron jumbotron-fluid" style={{background: "white"}}>
            <div className="container">
            <div className="card">
             <h2 className="card-header" style={{background: "#7952b3"}}>Enter Your Details</h2>
             <div className="card-body">
             <form onSubmit={this.submit}>
             <div className="input-group">
               <input 
               className="form-control"
               type="text"
               name="name"
               placeholder="Enter Name"
               value={this.state.name}
               onChange={this.handleChange}
               />
             </div>
             <div className="input-group">
               <input 
               className="form-control"
               type="text"
               name="companyName"
               placeholder="Enter Company Name"
               value={this.state.companyName}
               onChange={this.handleChange}
               />
             </div>
             <div className="input-group">
               <input 
               className="form-control"
               type="text"
               name="email"
               placeholder="Enter Email"
               value={this.state.email}
               onChange={this.handleChange}
               />
             </div>
             <div className="input-group">
               <input 
               className="form-control"
               type="text"
               name="number"
               placeholder="Enter Number"
               value={this.state.number}
               onChange={this.handleChange}
               />
             </div>
             <div className="input-group">
               <input 
               className="form-control"
               type="text"
               name="website"
               placeholder="Enter Website"
               value={this.state.website}
               onChange={this.handleChange}
               />
             </div>
             <div className="input-group">
               <textarea 
               className="form-control"
               name="companyAddress"
               cols="30"
               row="10"
               placeholder="Enter Company Address"
               value={this.state.companyAddress}
               onChange={this.handleChange}
               />
             </div>
             <button className="btn btn-primary" style={{background: "black", border: "none"}}>submit</button>
             </form>
             </div>
            </div>
            </div>
            </div>
            <Footer />
            </>
        );
    }
}

export default CustomerSetUp;