import React from 'react';

const Filter = props => {
  const {getbatteryFilter, batteryFilter} = props;

  return (
    <div className="input__container">
      Nivel de batería
      <select
        id="battery-level"
        name="size"
        onChange={getbatteryFilter}
        value={batteryFilter}
      >
        <option value={25}>{`<25%`}</option>
        <option value={50}>{`<50%`}</option>
        <option value={75}>{`<75%`}</option>
        <option value={100}>{`100%`}</option>
      </select>
    </div>
  );
};

export default Filter;
