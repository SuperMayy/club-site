import React from 'react';
import Nav from './Nav';

function AgentHome() {
  return (
    <div className="AgentSite">
      <Nav />
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Welcome</h1>
          <p className="lead">Below are useful links and tutorials.</p>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-body">
            <div id="accordion">
              {/* First Accordion */}
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                  <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  How to start
                  </button>
                  </h5>
                 </div>

                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    This tutorial goes through how to create, read, update and delete user data.<br/><br/>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
                    </div>
                  </div>
                  </div>
                </div>

              {/* Second Accordion */}
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How to use Stripe
                  </button>
                  </h5>
                </div>

              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body">
                This tutorial gives a showrt intro on how to use stripe. <br/><br/>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/AwklziE5HKo" allowFullScreen></iframe>
                    </div>
               </div>
              </div>
              </div>

              {/* Third Accordion */}
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Understanding the Database
                  </button>
                  </h5>
                </div>
                
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
               </div>
              </div>
              </div>

              {/* Fourth Accordion */}
              <div className="card">
                <div className="card-header" id="headingFour">
                  <h5 className="mb-0">
                  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Domain
                  </button>
                  </h5>
                </div>

              <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
               </div>
              </div>
              </div>

              {/* Fifth Accordion */}
              <div className="card">
                <div className="card-header" id="headingFive">
                <h5 className="mb-0">
                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Hosting
                </button>
                </h5>
                </div>
              <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentHome;