import React, {Fragment} from 'react';
import MyMapComponent from './components/MyMapComponent';
// import * as birdScooters from './clients/bird-get-scooters.json';
import Filter from './Filter';
import ClientFilter from './ClientFilter';
import './App.css';
import {withScriptjs, withGoogleMap} from 'react-google-maps';

const WrappedMap = withScriptjs(withGoogleMap(MyMapComponent));
const CLAVE_API = {
  key: 'AIzaSyBH9ARmSyvRWNx79up1lAvndPz0xYhET5c',
  language: 'es',
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      batteryFilter: 100,
      clientFilter: '',
    };
    this.getbatteryFilter = this.getbatteryFilter.bind(this);
    this.getClientFilter = this.getClientFilter.bind(this);
  }

  getbatteryFilter(event) {
    const newbatteryFilter = event.currentTarget.value;
    this.setState({
      batteryFilter: newbatteryFilter,
    });
  }

  getClientFilter(event) {
    const newClientFilter = event.currentTarget.value;
    this.setState({
      clientFilter: newClientFilter,
    });
  }

  render() {
    const {batteryFilter, clientFilter} = this.state;
    console.log(batteryFilter);
    return (
      <Fragment>
        <Filter
          getbatteryFilter={this.getbatteryFilter}
          batteryFilter={batteryFilter}
        />
        <ClientFilter
          getClientFilter={this.getClientFilter}
          // clientFilter
        />

        <div style={{width: '100vw', height: '100vh'}}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${CLAVE_API.key}`}
            loadingElement={<div style={{height: `100%`}} />}
            containerElement={<div style={{height: `100%`}} />}
            mapElement={<div style={{height: `50%`}} />}
            batteryFilter={batteryFilter}
            clientFilter={clientFilter}
          />
        </div>
      </Fragment>
    );
  }
}
