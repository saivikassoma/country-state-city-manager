import React from "react";

export default function CityList({ countryId, state, onAddCity, onDeleteCity }) {
  const { id: stateId, cities } = state;

  return (
    <div>
      <div style={{ marginBottom: 6 }}>
        <button onClick={() => onAddCity(countryId, stateId)}>Add City</button>
      </div>

      {!cities.length ? (
        <p style={{ margin: 0, color: "#777" }}>No cities.</p>
      ) : (
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {cities.map((city) => (
            <li key={city} style={{ marginBottom: 4 }}>
              {city}{" "}
              <button onClick={() => onDeleteCity(countryId, stateId, city)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
