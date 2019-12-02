import React from 'react';
import myMapComponent from './components/myMapComponent';
import {
  withScriptjs,
  withGoogleMap,
  // GoogleMap,
  // Marker,
} from 'react-google-maps';

const WrappedMap = withScriptjs(withGoogleMap(myMapComponent));
const CLAVE_API = {
  key: 'AIzaSyBH9ARmSyvRWNx79up1lAvndPz0xYhET5c',
  language: 'es',
};

export default function App() {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${CLAVE_API.key}`}
        loadingElement={<div style={{height: `100%`}} />}
        containerElement={<div style={{height: `100%`}} />}
        mapElement={<div style={{height: `100%`}} />}
      />
    </div>
  );
}
