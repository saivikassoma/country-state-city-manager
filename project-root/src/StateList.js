import React from "react";
import CityList from "./CityList";

export default function StateList({
  country,
  onAddState,
  onEditState,
  onDeleteState,
  onAddCity,
  onDeleteCity
}) {
  const { id: countryId, states } = country;

  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        <button onClick={() => onAddState(countryId)}>Add State</button>
      </div>

      {!states.length ? (
        <p style={{ margin: 0, color: "#555" }}>No states added yet.</p>
      ) : (
        states.map(state => (
          <div key={state.id} style={{ border: "1px dashed #aaa", padding: 10, marginBottom: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <strong>{state.name}</strong>
              <button onClick={() => onEditState(countryId, state.id)}>Edit</button>
              <button onClick={() => onDeleteState(countryId, state.id)}>Delete</button>
            </div>

            <div style={{ marginTop: 6 }}>
              <CityList
                countryId={countryId}
                state={state}
                onAddCity={onAddCity}
                onDeleteCity={onDeleteCity}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
