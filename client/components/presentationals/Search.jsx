import React from 'react';

const Search = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-5 search-description">
        <h3>Search Projects By Location</h3>
      </div>
      <div className="col-sm-7 input-wrapper">
        <input type="text" className="form-control search-input"/>
      </div>
    </div>
  </div>
);

export default Search;
