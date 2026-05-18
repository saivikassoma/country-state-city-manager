import React from 'react';
import CityList from './CityList';

function StateList({ countryId, states, editState, deleteState, addCity, deleteCity }) {
  return (
    <div className="state-list">
      {states.map(state => (
        <div key={state.id} className="state-card">
          <div className="card-header state-header">
            <h4>{state.name}</h4>
            <div className="action-buttons">
              <button className="edit-btn small-btn" onClick={() => editState(countryId, state.id, state.name)}>Edit</button>
              <button className="delete-btn small-btn" onClick={() => deleteState(countryId, state.id, state.name)}>Delete</button>
            </div>
          </div>

          <div className="cities-section">
            <div className="section-header">
              <h5>Cities</h5>
              <button className="add-btn micro-btn" onClick={() => addCity(countryId, state.id)}>+ Add City</button>
            </div>

            {state.cities.length === 0 ? (
              <p className="empty-message micro">No cities added in {state.name}.</p>
            ) : (
              <CityList 
                countryId={countryId}
                stateId={state.id}
                cities={state.cities}
                deleteCity={deleteCity}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StateList;
