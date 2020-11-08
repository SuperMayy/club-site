import React from 'react';
import Header from './Header';
import Footer from './Footer';
import QuoteSection from './reusable-components/QuoteSection';


const CaseStudy = () => {
    return (
        <div>
            <Header/>
            {/* <h3 className="subheader" style={{padding: "50px", textAlign: "center"}}>What our customers have to say</h3> */}
            <img src="https://images.pexels.com/photos/3184163/pexels-photo-3184163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            style={{borderRadius: "50%"}} class="img-fluid" alt="Responsive image"></img>
            <QuoteSection/>
            <Footer/>
        </div>
    )
}

export default CaseStudy;
