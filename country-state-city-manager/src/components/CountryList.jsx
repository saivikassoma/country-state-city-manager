import React from 'react';
import StateList from './StateList';

function CountryList({ 
  countries, 
  editCountry, 
  deleteCountry, 
  addState, 
  editState, 
  deleteState, 
  addCity, 
  deleteCity 
}) {
  return (
    <div className="country-list">
      {countries.map(country => (
        <div key={country.id} className="country-card">
          <div className="card-header country-header">
            <h2>{country.name}</h2>
            <div className="action-buttons">
              <button className="edit-btn" onClick={() => editCountry(country.id, country.name)}>Edit</button>
              <button className="delete-btn" onClick={() => deleteCountry(country.id, country.name)}>Delete</button>
            </div>
          </div>
          
          <div className="states-section">
            <div className="section-header">
              <h3>States</h3>
              <button className="add-btn small-btn" onClick={() => addState(country.id)}>+ Add State</button>
            </div>
            
            {country.states.length === 0 ? (
              <p className="empty-message small">No states added for {country.name}.</p>
            ) : (
              <StateList 
                countryId={country.id}
                states={country.states}
                editState={editState}
                deleteState={deleteState}
                addCity={addCity}
                deleteCity={deleteCity}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountryList;
