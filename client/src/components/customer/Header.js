import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/components/header.css';
import '../../styles/client.css';

const Header = () => {
    return(
        <div className="header">
            <div className="parent">
                <Link to="/">
                <div className="child1">LOGO.</div>
                </Link>
                <div className="child2">
                    <ul>
                        <li>Case Study</li>
                        <Link to="/about"><li>About</li></Link>
                        <a href="/#contact">
                            <li>Contact</li>
                        </a>
                    </ul>
                </div>
                <Link to="/payment" style={{background: "#343a40", padding: "8px", borderRadius: "15px"}}>
                <div className="child3">Sign Up</div>
                </Link>
            </div>
        </div>
    );
}

export default Header;