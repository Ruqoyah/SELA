import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

/**
 * @class ProfilePage
 *
 * @classdesc get user Profile and allow user to edit profile
 *
 */
export class GoogleMap extends Component {
  /**
   * @description render - renders the class component
   *
   * @return {object} returns an object
   *
   */
  render() {
    return (
      <div className="map-position">
        <Map google={this.props.google} zoom={14}>

          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Selected space</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

GoogleMap.propTypes = {
  google: PropTypes.object
};

export default GoogleApiWrapper({
  // apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
})(GoogleMap);
