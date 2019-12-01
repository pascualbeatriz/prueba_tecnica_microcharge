import React from 'react';
import {url} from './services/url';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  // Marker,
} from 'react-google-maps';

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{lat: 40.416775, lng: -3.70379}}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

// function getKey() {
//   url(url).then(data => {
//     console.log(data);
//   });
// }
// getKey();

const CLAVE_API = {
  key: 'AIzaSyBupMotUIWF5TsE8UQOQI_zFvZn4qZoVw0',
  language: 'es',
};

export default function App() {
  return (
    <div>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.CLAVE_API}`}
        loadingElement={<div style={{height: `100%`}} />}
        containerElement={<div style={{height: `400px`}} />}
        mapElement={<div style={{height: `100%`}} />}
      />
    </div>
  );
}
