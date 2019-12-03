import React, {Fragment} from 'react';
import myMapComponent from './components/myMapComponent';
import * as birdScooters from './clients/bird-get-scooters.json';
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
    <Fragment>
      level of batery <input type="radio" className="batery-level" />
      client <input type="radio" className="batery-level" />
      <div style={{width: '100vw', height: '100vh'}}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${CLAVE_API.key}`}
          loadingElement={<div style={{height: `100%`}} />}
          containerElement={<div style={{height: `100%`}} />}
          mapElement={<div style={{height: `100%`}} />}
        />
      </div>
    </Fragment>
  );
}
