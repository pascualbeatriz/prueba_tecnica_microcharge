import React, {Fragment} from 'react';
import {GoogleMap, Marker, InfoWindow} from 'react-google-maps';
import {MarkerClusterer} from 'react-google-maps/lib/components/addons/MarkerClusterer';
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
    const {batteryFilter, clientFilter} = this.props;
    let filteredBirds = birdScooters.birds.filter(
      birdScooter => birdScooter.battery_level <= batteryFilter
    );
    let showBirds = clientFilter === 'bird' || clientFilter === '';
    let showLime = clientFilter === 'lime' || clientFilter === '';
    // if (clientFilter === 'bird') {
    //   filteredBirds = filteredBirds.filter(
    //     scooter => 'Bird' === scooter.brand_name
    //   );
    // }
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
            {showBirds
              ? filteredBirds.map((birdScooter, index) => (
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
                ))
              : null}

            {showLime
              ? limeScooters.data.attributes.vehicles
                  .filter(
                    limeScooter =>
                      limeScooter.attributes.battery_percentage <= batteryFilter
                  )
                  .map((limeScooter, index) => (
                    <Marker
                      key={limeScooter.id}
                      position={{
                        lat: limeScooter.attributes.latitude,
                        lng: limeScooter.attributes.longitude,
                      }}
                      batteryFilter={limeScooter.attributes.battery_percentage}
                      onClick={() => this.handleToggleOpen(limeScooter.id)}
                    >
                      {this.state.openVehicleId === limeScooter.id && (
                        <InfoWindow
                          onCloseClick={() => this.handleToggleClose()}
                        >
                          <div>
                            <p>{`Matrícula: ${limeScooter.attributes.plate_number}`}</p>
                            <p>{`Marca: ${limeScooter.attributes.type}`}</p>
                            <p>{`Tipo: ${limeScooter.attributes.type_name}`}</p>
                            <p>{`Disponible: ${
                              limeScooter.attributes.status === 'available'
                                ? 'Sí'
                                : 'No'
                            }`}</p>
                          </div>
                        </InfoWindow>
                      )}
                    </Marker>
                  ))
              : null}
          </MarkerClusterer>
        </GoogleMap>
      </Fragment>
    );
  }
}

export default MyMapComponent;
