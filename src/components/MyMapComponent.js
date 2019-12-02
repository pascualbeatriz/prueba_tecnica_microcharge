import React from 'react';
import {GoogleMap, Marker, InfoWindow} from 'react-google-maps';
import * as birdScooters from '../clients/bird-get-scooters.json';
import * as limeScooters from '../clients/lime-get-scooter.json';

class myMapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openVehicleId: '',
    };
    // this.handleToggleOpen = this.handleToggleOpen.bind(this);
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

  render() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{lat: 40.416775, lng: -3.70379}}
      >
        {birdScooters.birds.map((birdScooter, index) => (
          <Marker
            key={birdScooter.id}
            position={{
              lat: birdScooter.location.latitude,
              lng: birdScooter.location.longitude,
            }}
            onClick={() => this.handleToggleOpen(birdScooter.id)}
          >
            {this.state.openVehicleId === birdScooter.id && (
              <InfoWindow onCloseClick={() => this.handleToggleClose()}>
                <div>
                  <p>{}</p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    );
  }
}

export default myMapComponent;
