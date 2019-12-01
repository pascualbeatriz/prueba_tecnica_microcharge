import React, {useState} from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
import * as birdScooters from './clients/bird-get-scooters.json';
import * as limeScooters from './clients/lime-get-scooter.json';

function Map() {
  const [selectbirdScooter, setSelectbirdScooter] = useState(null);
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{lat: 40.416775, lng: -3.70379}}>
      {birdScooters.birds.map(birdScooter => (
        <Marker
          key={birdScooter.id}
          position={{
            lat: birdScooter.location.latitude,
            lng: birdScooter.location.longitude,
          }}
          onclick={() => {
            setSelectbirdScooter(birdScooter);
          }}
        />
      ))}
      {selectbirdScooter && (
        <InfoWindow
          position={{
            lat: selectbirdScooter.location.latitude,
            lng: selectbirdScooter.location.longitude,
          }}
          onCloseClick={() => {
            setSelectbirdScooter(null);
          }}
        >
          <div>
            <p>{selectbirdScooter.code}</p>
          </div>
        </InfoWindow>
      )}
      {limeScooters.data.attributes.vehicles.map(limeScooter => (
        <Marker
          key={limeScooter.id}
          position={{
            lat: limeScooter.attributes.latitude,
            lng: limeScooter.attributes.longitude,
          }}
        />
      ))}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

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
