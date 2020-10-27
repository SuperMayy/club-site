import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/agent">Agent</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <Link className="nav-link" to="/agent/read">
          <li className="nav-item active">
            Look up Customers
            {/* <span class="sr-only">(current)</span> */}
          </li>
          </Link>
          <Link className="nav-link" to="/agent/create"> 
          <li className="nav-item">
            Create Customers
          </li>
          </Link>
          <Link className="nav-link" to="/agent">
          <li className="nav-item">
            Stripe Account
          </li>
          </Link>
          <Link className="nav-link" to="/agent">
          <li className="nav-item">
            Useful Links
          </li>
          </Link>
        </ul>
       </div>
      </nav>
    </div>
  );
}

export default Nav;