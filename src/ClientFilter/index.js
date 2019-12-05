import React from 'react';

const ClientFilter = props => {
  const {getClientFilter} = props;

  return (
    <div className="input__container">
      Cliente
      <select id="client" name="size" onChange={getClientFilter}>
        <option value="bird">Bird</option>
        <option value="lime">Lime</option>
      </select>
    </div>
  );
};

export default ClientFilter;
