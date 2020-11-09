import React from 'react';

const Card = ({title, text1, text2, text3}) => {
    return(
        <div className="col-sm-4" style={{marginBottom: "60px", marginTop: "60px"}}>
            <div className="card1">
                <h5 style={{textAlign: "center", marginBottom: "30px"}}>{title}</h5>
                <div className="card" style={{width: '18rem', margin: "auto"}}>
                  <img className="card-img-top" 
                  src="https://images.pexels.com/photos/3184163/pexels-photo-3184163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Card cap"/>
                  <div className="card-body">
                    {/* <h5 className="card-title">Card title</h5> */}
                    <p className="card-text">{text1}</p>
                    <p className="card-text">{text2}</p>
                    <p className="card-text">{text3}</p>
                    <button className="btn" style={{ background: "black", color: "white" }}>Go somewhere</button>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Card;