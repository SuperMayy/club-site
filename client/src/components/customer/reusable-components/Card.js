import React from 'react';

const Card = () => {
    return(
        <div className="">
            <div className="card1">
                <h5 style={{textAlign: "center"}}>Card Sub-header</h5>
                <div className="card" style={{width: '18rem'}}>
                  <img className="card-img-top" src="https://images.pexels.com/photos/3184163/pexels-photo-3184163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn" style={{ background: "black", color: "white" }}>Go somewhere</button>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Card;