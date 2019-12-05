import React from 'react';

const BatteryFilter = props => {
  const {getbatteryFilter, batteryFilter} = props;

  return (
    <div className="input__container">
      <label htmlFor="battery-level" className="text">
        Nivel de batería
      </label>
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

export default BatteryFilter;
