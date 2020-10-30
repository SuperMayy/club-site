import React from 'react';
// import './App.css';
import axios from 'axios';

class Contact extends React.Component {

  state = {
    fullname: '',
    email: '',
    emailBody: ''
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });

  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      fullname: this.state.fullname,
      email: this.state.email,
      emailBody: this.state.emailBody
    };

    axios({
      url: '/api/sent',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data has been sent to the server!');
    })
    .catch(()=> {
      console.log('Internal server error');
    });

    if (window.confirm('Your message was sent.')) 
            {
                window.location.href='/formsent'
            };
      console.log('Data has been sent to the server!');

  };

  render() {
    console.log('State: ', this.state);

    return (
      <div className="App" style={{margin: "auto"}}>
        <div className="container-fluid" style={{margin: "auto"}}>
        <div className="card w-75" style={{margin: "auto"}}>
        <div className="card-body">
          <h5 className="card-title form">Contact Form</h5>
          <p className="card-text">Please use the form below to react us or call 07730105390</p>
          <form onSubmit={this.submit}>
          <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Full Name</label>
          <input 
          type="text" 
          className="form-control" 
          id="exampleFormControlInput1" 
          placeholder="Full Name"
          name="fullname" 
          value={this.state.fullname}
          onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input 
          type="email" 
          className="form-control" 
          id="exampleFormControlInput1" 
          placeholder="Email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Reason For Contacting</label>
          <textarea 
          className="form-control" 
          id="exampleFormControlTextarea1" 
          rows="3"
          name="emailBody"
          value={this.state.emailBody}
          onChange={this.handleChange}
          ></textarea>
        </div>
        <button className="btn" style={{ background: "black", color: "white" }}>Submit</button>
        </form>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Contact;
