import React from 'react';
import '../../styles/components/footer.css'

const Footer = () => {
    return(
        <div className="footer" style={{paddingBottom: "60px", paddingTop: "30px", marginTop: "30px"}}>
            <div className="parent1">
                <div className="logo">T&C</div>
                <div className="case">Privacy</div>
                <div className="about">LOGO.</div>
                <div className="contact">Cookies</div>
                <a href="/#contact"><div className="sign">Contact</div></a>
            </div>
            <div className="parent2">&copy;{new Date().getFullYear()} Name of Company</div>
            {/* <div className="parent3">Company Registration Informations</div> */}
        </div>
    );
}

export default Footer;