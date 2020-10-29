import React from 'react';
import Nav from './Nav';

function AgentHome() {
  return (
    <div className="AgentSite">
      <Nav />
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Welcome</h1>
          <p class="lead">Below are useful links and tutorials.</p>
        </div>
        <div className="container">
          <div class="card">
            <div class="card-body">
            <div id="accordion">
              {/* First Accordion */}
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                  <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  How to start
                  </button>
                  </h5>
                 </div>

                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body">
                    This tutorial goes through how to create, read, update and delete user data.<br/><br/>
                    <div class="embed-responsive embed-responsive-16by9">
                      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                    </div>
                  </div>
                  </div>
                </div>

              {/* Second Accordion */}
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                  <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How to use Stripe
                  </button>
                  </h5>
                </div>

              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body">
                This tutorial gives a showrt intro on how to use stripe. <br/><br/>
                    <div class="embed-responsive embed-responsive-16by9">
                      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/AwklziE5HKo" allowfullscreen></iframe>
                    </div>
               </div>
              </div>
              </div>

              {/* Third Accordion */}
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                  <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Understanding the Database
                  </button>
                  </h5>
                </div>
                
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
               </div>
              </div>
              </div>

              {/* Fourth Accordion */}
              <div class="card">
                <div class="card-header" id="headingFour">
                  <h5 class="mb-0">
                  <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Domain
                  </button>
                  </h5>
                </div>

              <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
               </div>
              </div>
              </div>

              {/* Fifth Accordion */}
              <div class="card">
                <div class="card-header" id="headingFive">
                <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Hosting
                </button>
                </h5>
                </div>
              <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                <div class="card-body">
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