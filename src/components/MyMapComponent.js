import React, {Fragment} from 'react';
import {GoogleMap, Marker, InfoWindow} from 'react-google-maps';
import {MarkerClusterer} from 'react-google-maps/lib/components/addons/MarkerClusterer';
import Filter from '../Filter';
import * as birdScooters from '../clients/bird-get-scooters.json';
import * as limeScooters from '../clients/lime-get-scooter.json';

class MyMapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openVehicleId: '',
    };
  }

  handleToggleOpen(id) {
    this.setState({
      openVehicleId: id,
    });
  }

  handleToggleClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  onMarkerClustererClick(markerClusterer) {
    const clickedMarkers = markerClusterer.getMarkers();
    console.log(`Current clicked markers length: ${clickedMarkers.length}`);
    console.log(clickedMarkers);
  }

  render() {
    const {batteryFilter} = this.props;

    return (
      <Fragment>
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{lat: 40.416775, lng: -3.70379}}
        >
          <MarkerClusterer
            onClick={this.onMarkerClustererClick}
            averageCenter
            enableRetinaIcons
            gridSize={50}
          >
            {birdScooters.birds
              .filter(birdScooter => birdScooter.battery_level <= batteryFilter)
              .map((birdScooter, index) => (
                <Marker
                  key={birdScooter.id}
                  position={{
                    lat: birdScooter.location.latitude,
                    lng: birdScooter.location.longitude,
                  }}
                  batteryFilter={birdScooter.battery_level}
                  onClick={() => this.handleToggleOpen(birdScooter.id)}
                >
                  {this.state.openVehicleId === birdScooter.id && (
                    <InfoWindow onCloseClick={() => this.handleToggleClose()}>
                      <div>
                        <p>{`Código vehículo: ${birdScooter.code}`}</p>
                        <p>{`Marca: ${birdScooter.brand_name}`}</p>
                        <p>{`Bluetooh: ${
                          birdScooter.bluetooth === true ? 'Sí' : 'No'
                        }`}</p>
                        <p>{`Disponible: ${
                          birdScooter.lifecycle.condition === 'available'
                            ? 'Sí'
                            : 'No'
                        }`}</p>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              ))}
          </MarkerClusterer>
        </GoogleMap>
      </Fragment>
    );
  }
}

export default MyMapComponent;
// eso es, ahí sí que te lo pinta
// vale pero desde App hasta MyMapComponent puedes pasarle lo que quieras por props
// o sea, puede estar el estado y los handlers en app, y pasar solo por props a MyMapComponent el valor del filtro
