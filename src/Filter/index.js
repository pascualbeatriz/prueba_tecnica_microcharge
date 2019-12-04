import React from 'react';
import MyMapComponent from '../components/MyMapComponent';

const Filter = props => {
  const {getbatteryFilter, birdScooter} = props;

  return (
    <div className="input__container">
      Nivel de batería
      <select id="battery-level" name="size" onChange={getbatteryFilter}>
        <option value={25} defaultValue={birdScooter < 25}>
          {`<25%`}
        </option>
        <option value={50} defaultValue={birdScooter < 50}>
          {`<50%`}
        </option>
        <option value={75} defaultValue={birdScooter < 75}>
          {`<75%`}
        </option>
        <option value={100} defaultValue={birdScooter === 100}>
          {`100%`}
        </option>
      </select>
    </div>
  );
};

export default Filter;
