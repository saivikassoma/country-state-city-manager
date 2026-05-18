import React from 'react';

function CityList({ countryId, stateId, cities, deleteCity }) {
  return (
    <div className="city-list">
      {cities.map(city => (
        <div key={city.id} className="city-card">
          <span className="city-name">{city.name}</span>
          <button className="delete-btn micro-btn" onClick={() => deleteCity(countryId, stateId, city.id, city.name)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CityList;
