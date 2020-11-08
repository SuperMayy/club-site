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
              <video controls autoPlay>
                <source src={video1} type="video/mp4"/>
              </video>
            </div>
            <div className="header-region">
                <h3 className="subheader">Everything in one.</h3>
                <p style={{textAlign: "center"}}>Our platform is designed to have everything you will 
                need in one place. No matter what type of classes you run.
                With have everything in one place, it makes your life easier.</p>
            </div>
            <hr />
            {/* Card Info Region */}
            <div className="column">
            <div className="row">
                <Card 
                title="Bookings/payments?"
                text1="Ad-hoc classes (where parents can book single day or every Wednesday for 3/5 weeks ect)"
                text2="Block bookings"
                text3="Monthly subscriptions" 
                />
                <Card 
                title="Easy"
                text1="Easy to understand"
                text2="Easy to edit"
                text3="Easy to change"
                />
                <Card 
                title="Why us?" 
                text1="No hidden costs (there’s a name for this when a company takes a percentage)"
                text2="Built in video call feature (am I allowed to call it zoom)"
                text3="Link it to your very own app"
                />
                </div>
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