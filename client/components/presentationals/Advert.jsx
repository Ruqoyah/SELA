import React from 'react';

const Advert = () => (
  <div>
    <div className="advert">
      <div className="overlay">
        <div className="logo">
          <h3 className="logo-text">SELA</h3>
        </div>
        <h3 className="text-slogan">Keep track of development
          <br/> projects near you</h3>
        <h3 className="text-description">
        The Sela platform enables stakeholders share real time information
          <br/>
          on the state of infrastructure projects to ensure transparent delivery
        </h3>
        <button
          className="btn btn-sm btn-info"
        >
          SEE PROJECTS
          <i className="fa fa-angle-down" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
);

export default Advert;
