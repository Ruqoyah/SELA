import React from 'react';
import ProgressBar from './ProgressBar';

const AllProjects = () => (
  <div className="container-fluid projects">
    <div className="row">
      <div className="col-sm-4 title-wrapper">
        <h3 className="title">All Projects</h3>
      </div>
      <div className="col-sm-8">
        <div className="sort-buttons">
          <div
            className="btn-group"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <h3 className="sort-text">Sort by:</h3>
            <button
              className="btn btn-sm btn-dropdown button-style"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
            Budget
              <i className="fa fa-angle-down space" aria-hidden="true" />
            </button>

            <div className="dropdown-menu show-dropdown" aria-labelledby="btnGroupDrop1">
              <a className="dropdown-item" href="#">$50,000.00</a>
              <a className="dropdown-item" href="#">$60,000.00</a>
              <a className="dropdown-item" href="#">$70,000.00</a>
              <a className="dropdown-item" href="#">$80,000.00</a>
            </div>
            <div className="btn-group" role="group">
              <button
                className="btn btn-sm btn-dropdown button-style"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
            Start date
                <i className="fa fa-angle-down space" aria-hidden="true" />
              </button>
              <div className="dropdown-menu show-dropdown" aria-labelledby="btnGroupDrop1">
                <a className="dropdown-item" href="#">January</a>
                <a className="dropdown-item" href="#">Feburary</a>
                <a className="dropdown-item" href="#">March</a>
                <a className="dropdown-item" href="#">April</a>
              </div>
            </div>
            <div className="btn-group" role="group">
              <button
                className="btn btn-sm btn-dropdown button-style"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
            End date
                <i className="fa fa-angle-down space" aria-hidden="true" />
              </button>
              <div className="dropdown-menu show-dropdown" aria-labelledby="btnGroupDrop1">
                <a className="dropdown-item" href="#">January</a>
                <a className="dropdown-item" href="#">Feburary</a>
                <a className="dropdown-item" href="#">March</a>
                <a className="dropdown-item" href="#">April</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="project-cards">
      <div className="row card-row">
        <div className="col-sm-6">
          <div className="project-card">
            <div className="row">
              <div className="col-sm-4">
                <div className="image-wrapper">
                  <div className="progress" style={{ backgroundColor: '#27AE60' }}>Initiated</div>
                  <img src="/images/borehole.jpeg" className="image-position"/>
                  <ProgressBar
                    className="progress-bar"
                    percent="20"
                    color="#2D9CDB"/>
                  <small className="percent">20% complete</small>
                </div>
              </div>
              <div className="col-sm-8 card-info">
                <h5 className="card-title">Construction of Borehole</h5>
                <div className="row">
                  <div className="col-sm-6">
                    <i className="fa fa-map-marker address-icon" aria-hidden="true" />
                    <h3 className="font-style">Ikorodu, Lagos</h3>
                  </div>
                  <div className="col-sm-6">
                    <img src="/images/budget.png" className="budget-icon"/>
                    <h3 className="font-style">Budget: $50,000.00</h3>
                  </div>
                </div>
                <p className="card-description">The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem</p>
                <hr/>
                <h5 className="contractors">Contractors</h5>
                <img src="/images/face.jpeg" className="contractor-pic"/>
                <img src="/images/small-logo.png" className="contractor-pic"/>
                <div className="view-more-wrappper">
                  <a className="view-more">View more details</a>
                  <i className="fa fa-angle-right space" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="project-card">
            <div className="row">
              <div className="col-sm-4">
                <div className="image-wrapper">
                  <div className="progress" style={{ backgroundColor: '#F2994A' }}>On track to be defaulted</div>
                  <img src="/images/classroom.gps.image.jpeg" className="image-position"/>
                  <ProgressBar
                    className="progress-bar"
                    percent="0"
                    color="#fff"/>
                  <small className="percent">0% complete</small>
                </div>
              </div>
              <div className="col-sm-8 card-info">
                <h5 className="card-title">Renovation of Classrooms</h5>
                <div className="row">
                  <div className="col-sm-6">
                    <i className="fa fa-map-marker address-icon" aria-hidden="true" />
                    <h3 className="font-style">Benin City, Edo</h3>
                  </div>
                  <div className="col-sm-6">
                    <img src="/images/budget.png" className="budget-icon"/>
                    <h3 className="font-style">Budget: $5,000.00</h3>
                  </div>
                </div>
                <p className="card-description">ducation remains the only sure way to guarantee the future of the next generation. This project is expected to change the poor educational facilities that have made it difficult for students</p>
                <hr/>
                <h5 className="contractors">Contractors</h5>
                <img src="/images/pix.jpeg" className="contractor-pic"/>
                <img src="/images/star-bucks.jpeg" className="contractor-pic"/>
                <img src="/images/nvidia.jpeg" className="contractor-pic"/>
                <div className="view-more-wrappper">
                  <a className="view-more">View more details</a>
                  <i className="fa fa-angle-right space" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row card-row">
        <div className="col-sm-6">
          <div className="project-card">
            <div className="row">
              <div className="col-sm-4">
                <div className="image-wrapper">
                  <div className="progress" style={{ backgroundColor: '#27AE60' }}>Initiated</div>
                  <img src="/images/borehole.jpeg" className="image-position"/>
                  <ProgressBar
                    className="progress-bar"
                    percent="20"
                    color="#2D9CDB"/>
                  <small className="percent">20% complete</small>
                </div>
              </div>
              <div className="col-sm-8 card-info">
                <h5 className="card-title">Construction of Borehole</h5>
                <div className="row">
                  <div className="col-sm-6">
                    <i className="fa fa-map-marker address-icon" aria-hidden="true" />
                    <h3 className="font-style">Ikorodu, Lagos</h3>
                  </div>
                  <div className="col-sm-6">
                    <img src="/images/budget.png" className="budget-icon"/>
                    <h3 className="font-style">Budget: $50,000.00</h3>
                  </div>
                </div>
                <p className="card-description">The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem</p>
                <hr/>
                <h5 className="contractors">Contractors</h5>
                <img src="/images/face.jpeg" className="contractor-pic"/>
                <img src="/images/small-logo.png" className="contractor-pic"/>
                <div className="view-more-wrappper">
                  <a className="view-more">View more details</a>
                  <i className="fa fa-angle-right space" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="project-card">
            <div className="row">
              <div className="col-sm-4">
                <div className="image-wrapper">
                  <div className="progress" style={{ backgroundColor: '#F2994A' }}>On track to be defaulted</div>
                  <img src="/images/classroom.gps.image.jpeg" className="image-position"/>
                  <ProgressBar
                    className="progress-bar"
                    percent="0"
                    color="#fff"/>
                  <small className="percent">0% complete</small>
                </div>
              </div>
              <div className="col-sm-8 card-info">
                <h5 className="card-title">Renovation of Classrooms</h5>
                <div className="row">
                  <div className="col-sm-6">
                    <i className="fa fa-map-marker address-icon" aria-hidden="true" />
                    <h3 className="font-style">Benin City, Edo</h3>
                  </div>
                  <div className="col-sm-6">
                    <img src="/images/budget.png" className="budget-icon"/>
                    <h3 className="font-style">Budget: $5,000.00</h3>
                  </div>
                </div>
                <p className="card-description">ducation remains the only sure way to guarantee the future of the next generation. This project is expected to change the poor educational facilities that have made it difficult for students</p>
                <hr/>
                <h5 className="contractors">Contractors</h5>
                <img src="/images/pix.jpeg" className="contractor-pic"/>
                <img src="/images/star-bucks.jpeg" className="contractor-pic"/>
                <img src="/images/nvidia.jpeg" className="contractor-pic"/>
                <div className="view-more-wrappper">
                  <a className="view-more">View more details</a>
                  <i className="fa fa-angle-right space" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row card-row">
        <div className="col-sm-6">
          <div className="project-card">
            <div className="row">
              <div className="col-sm-4">
                <div className="image-wrapper">
                  <div className="progress" style={{ backgroundColor: '#27AE60' }}>Initiated</div>
                  <img src="/images/borehole.jpeg" className="image-position"/>
                  <ProgressBar
                    className="progress-bar"
                    percent="20"
                    color="#2D9CDB"/>
                  <small className="percent">20% complete</small>
                </div>
              </div>
              <div className="col-sm-8 card-info">
                <h5 className="card-title">Construction of Borehole</h5>
                <div className="row">
                  <div className="col-sm-6">
                    <i className="fa fa-map-marker address-icon" aria-hidden="true" />
                    <h3 className="font-style">Ikorodu, Lagos</h3>
                  </div>
                  <div className="col-sm-6">
                    <img src="/images/budget.png" className="budget-icon"/>
                    <h3 className="font-style">Budget: $50,000.00</h3>
                  </div>
                </div>
                <p className="card-description">The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem</p>
                <hr/>
                <h5 className="contractors">Contractors</h5>
                <img src="/images/face.jpeg" className="contractor-pic"/>
                <img src="/images/small-logo.png" className="contractor-pic"/>
                <div className="view-more-wrappper">
                  <a className="view-more">View more details</a>
                  <i className="fa fa-angle-right space" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="project-card">
            <div className="row">
              <div className="col-sm-4">
                <div className="image-wrapper">
                  <div className="progress" style={{ backgroundColor: '#F2994A' }}>On track to be defaulted</div>
                  <img src="/images/classroom.gps.image.jpeg" className="image-position"/>
                  <ProgressBar
                    className="progress-bar"
                    percent="0"
                    color="#fff"/>
                  <small className="percent">0% complete</small>
                </div>
              </div>
              <div className="col-sm-8 card-info">
                <h5 className="card-title">Construction of Udala Road</h5>
                <div className="row">
                  <div className="col-sm-6">
                    <i className="fa fa-map-marker address-icon" aria-hidden="true" />
                    <h3 className="font-style">Benin City, Edo</h3>
                  </div>
                  <div className="col-sm-6">
                    <img src="/images/budget.png" className="budget-icon"/>
                    <h3 className="font-style">Budget: $15,000.00</h3>
                  </div>
                </div>
                <p className="card-description">ducation remains the only sure way to guarantee the future of the next generation. This project is expected to change the poor educational facilities that have made it difficult for students</p>
                <hr/>
                <h5 className="contractors">Contractors</h5>
                <img src="/images/pix.jpeg" className="contractor-pic"/>
                <img src="/images/star-bucks.jpeg" className="contractor-pic"/>
                <img src="/images/nvidia.jpeg" className="contractor-pic"/>
                <div className="view-more-wrappper">
                  <a className="view-more">View more details</a>
                  <i className="fa fa-angle-right space" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row card-row">
        <div className="col-sm-6">
          <div className="project-card">
            <div className="row">
              <div className="col-sm-4">
                <div className="image-wrapper">
                  <div className="progress" style={{ backgroundColor: '#333333' }}>Completed</div>
                  <img src="/images/class.jpeg" className="image-position"/>
                  <ProgressBar
                    className="progress-bar"
                    percent="100"
                    color="#2D9CDB"/>
                  <small className="percent">100% complete</small>
                </div>
              </div>
              <div className="col-sm-8 card-info">
                <h5 className="card-title">Construction of Classroom</h5>
                <div className="row">
                  <div className="col-sm-6">
                    <i className="fa fa-map-marker address-icon" aria-hidden="true" />
                    <h3 className="font-style">Sambisa, Borno</h3>
                  </div>
                  <div className="col-sm-6">
                    <img src="/images/budget.png" className="budget-icon"/>
                    <h3 className="font-style">Budget: $80,000.00</h3>
                  </div>
                </div>
                <p className="card-description">The Boko Haram scourge led to the destruction of this classroom which has now been fully rebuilt and equipped with state of the art facilities to aid the learning of students</p>
                <hr/>
                <h5 className="contractors">Contractors</h5>
                <img src="/images/head.jpeg" className="contractor-pic"/>
                <img src="/images/small-logo.png" className="contractor-pic"/>
                <img src="/images/person.jpeg" className="contractor-pic"/>
                <div className="view-more-wrappper">
                  <a className="view-more">View more details</a>
                  <i className="fa fa-angle-right space" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="project-card">
            <div className="row">
              <div className="col-sm-4">
                <div className="image-wrapper">
                  <div className="progress" style={{ backgroundColor: '#828282' }}>On track to be completed</div>
                  <img src="/images/brg.jpeg" className="image-position"/>
                  <ProgressBar
                    className="progress-bar"
                    percent="80"
                    color="#2D9CDB"/>
                  <small className="percent">80% complete</small>
                </div>
              </div>
              <div className="col-sm-8 card-info">
                <h5 className="card-title">Construction of Burna Bridge</h5>
                <div className="row">
                  <div className="col-sm-6">
                    <i className="fa fa-map-marker address-icon" aria-hidden="true" />
                    <h3 className="font-style">Minna, Niger</h3>
                  </div>
                  <div className="col-sm-6">
                    <img src="/images/budget.png" className="budget-icon"/>
                    <h3 className="font-style">Budget: $10,000.00 </h3>
                  </div>
                </div>
                <p className="card-description">The Burna Bridge project will link eight communities and aid the inflow of essential goods and services to these areas. It is expected to be completed in the next two months</p>
                <hr/>
                <h5 className="contractors">Contractors</h5>
                <img src="/images/face.jpeg" className="contractor-pic"/>
                <img src="/images/icon.png" className="contractor-pic"/>
                <div className="view-more-wrappper">
                  <a className="view-more">View more details</a>
                  <i className="fa fa-angle-right space" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="circles">
      <div className="circle"/>
      <div className="circle"/>
      <div className="circle"/>
      <div className="circle"/>
      <div className="circle"/>
      <div className="circle"/>
    </div>
  </div>
);

export default AllProjects;
