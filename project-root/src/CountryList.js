import React from "react";
import StateList from "./StateList";

export default function CountryList({
  countries,
  onEditCountry,
  onDeleteCountry,
  onAddState,
  onEditState,
  onDeleteState,
  onAddCity,
  onDeleteCity
}) {
  if (!countries.length) {
    return (
      <p style={{ marginTop: 12 }}>
        No countries yet. Click "Add Country" to get started.
      </p>
    );
  }

  return (
    <div style={{ marginTop: 16 }}>
      {countries.map(country => (
        <div key={country.id} style={{ border: "1px solid #ccc", padding: 12, marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <h3 style={{ margin: 0 }}>{country.name}</h3>
            <button onClick={() => onEditCountry(country.id)}>Edit</button>
            <button onClick={() => onDeleteCountry(country.id)}>Delete</button>
          </div>

          <div style={{ marginTop: 8 }}>
            <StateList
              country={country}
              onAddState={onAddState}
              onEditState={onEditState}
              onDeleteState={onDeleteState}
              onAddCity={onAddCity}
              onDeleteCity={onDeleteCity}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
