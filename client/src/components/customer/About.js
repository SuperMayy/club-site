import React from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

const About = () => {
    return (
        <div>
            <Header />
            <div className="jumbotron text-center" style={{background: "#3f51b5", color: "white", borderRadius: "0px"}}>
              <h1>Company</h1>
              <p>We specialize in blablabla</p>
            </div>
            <div className="container-fluid" style={{paddingBottom: "60px"}}>
            <div className="row">
            <div className="col-sm-8">
            <h2>About Company</h2>
              <h4>Lorem ipsum..</h4>
              <p>Lorem ipsum..</p>
              {/* <a href="/#contact"><button className="btn btn-default btn-lg" 
              style={{background: "black", color: "white"}}>Get in Touch</button></a> */}
            </div>
            <div className="col-sm-4">
              <img src="https://images.pexels.com/photos/3184163/pexels-photo-3184163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="card-img-top"
              ></img>
            </div>
            </div>
            </div>
            <div className="container-fluid" style={{background: "#3f51b5", color: "white", paddingBottom: "80px", paddingTop: "60px"}}>
            <div className="row">
            <div className="col-sm-4">
              <img src="https://images.pexels.com/photos/3184163/pexels-photo-3184163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="card-img-top"
              ></img>
            </div>
            <div className="col-sm-8">
              <h2>Our Values</h2>
              <h4><strong>MISSION:</strong> Our mission lorem ipsum..</h4>
              <p><strong>VISION:</strong> Our vision Lorem ipsum..</p>
            </div>
            </div>
            </div>


            <div className="container-fluid" style={{paddingBottom: "60px"}}>
            <div className="text-center"><br/><br/>
              <h2>Pricing</h2><br/><br/>
              <h4>A payment plan that works for you</h4><br/><br/>
            </div>
            <div className="row">
              <div className="col-sm-4"></div>
              <div className="col-sm-4">
                <div className="card text-center">
                <div className="card-heading"><br/><br/>
                  <h1>Basic</h1>
                </div>
                <div className="card-body">
                  <p><strong>20</strong> Lorem</p>
                  <p><strong>15</strong> Ipsum</p>
                  <p><strong>5</strong> Dolor</p>
                  <p><strong>2</strong> Sit</p>
                  <p><strong>Endless</strong> Amet</p>
                </div>
                <div className="card-footer">
                  <h3>£30</h3>
                  <h4>per month</h4><br/>
                  <Link to="/payment"><button className="btn btn-lg" style={{background: "black", color: "white"}}>Sign Up</button></Link>
                </div>
            </div>
            </div>
            </div>
            </div>

            <Footer />
        </div>
    )
}

export default About;