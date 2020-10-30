import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Card from './reusable-components/Card';
import video1 from '../../assets/student.mp4';

const Home = () => {
    return(
        <div className="">
            <Header />
            <div>
              <video controls>
                <source src={video1} type="video/mp4"/>
              </video>
            </div>
            <div className="header-region">
                <h3 className="subheader">A quote to convince</h3>
                <p style={{textAlign: "center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <hr />
            {/* Card Info Region */}
            <div className="clickable-card">
                <Card />
                <Card />
                <Card />
            </div>
            <br/>
            <div className="header-region">
                <div className="subheader">
                    <h3>Contact Us</h3>
                </div>
            </div>
            <div id="contact">
              <Contact />
            </div>
            <br/>
            <Footer />
        </div>
    );
}

export default Home;