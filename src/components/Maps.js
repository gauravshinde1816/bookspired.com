import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
const Maps = (props) => {
  return (
    <div>
      <Map google={props.google} zoom={14}>
        <Marker name={"Current location"} />

        {/* <InfoWindow>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow> */}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyC8xbXBMhYQvKG-B72AeJhC8cBBVqzr3TE",
})(Maps);
