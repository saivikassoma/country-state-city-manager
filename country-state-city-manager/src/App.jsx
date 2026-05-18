import React, { useState } from 'react';
import CountryList from './components/CountryList';
import './App.css';

function App() {
  const [countries, setCountries] = useState([
    {
      id: 1,
      name: "India",
      states: [
        {
          id: 1,
          name: "Karnataka",
          cities: [
            { id: 1, name: "Bangalore" },
            { id: 2, name: "Mysore" }
          ]
        }
      ]
    }
  ]);

  const addCountry = () => {
    const name = window.prompt("Enter Country Name:");
    if (name && name.trim()) {
      setCountries([...countries, { id: Date.now(), name: name.trim(), states: [] }]);
    }
  };

  const editCountry = (id, currentName) => {
    if (window.confirm(`Are you sure you want to edit country: ${currentName}?`)) {
      const name = window.prompt("Enter New Country Name:", currentName);
      if (name && name.trim() && name.trim() !== currentName) {
        setCountries(countries.map(c => (c.id === id ? { ...c, name: name.trim() } : c)));
      }
    }
  };

  const deleteCountry = (id, currentName) => {
    if (window.confirm(`Are you sure you want to delete country: ${currentName}? This will delete all its states and cities as well.`)) {
      setCountries(countries.filter(c => c.id !== id));
    }
  };

  const addState = (countryId) => {
    const name = window.prompt("Enter State Name:");
    if (name && name.trim()) {
      setCountries(countries.map(c => {
        if (c.id === countryId) {
          return { ...c, states: [...c.states, { id: Date.now(), name: name.trim(), cities: [] }] };
        }
        return c;
      }));
    }
  };

  const editState = (countryId, stateId, currentName) => {
    if (window.confirm(`Are you sure you want to edit state: ${currentName}?`)) {
      const name = window.prompt("Enter New State Name:", currentName);
      if (name && name.trim() && name.trim() !== currentName) {
        setCountries(countries.map(c => {
          if (c.id === countryId) {
            return {
              ...c,
              states: c.states.map(s => (s.id === stateId ? { ...s, name: name.trim() } : s))
            };
          }
          return c;
        }));
      }
    }
  };

  const deleteState = (countryId, stateId, currentName) => {
    if (window.confirm(`Are you sure you want to delete state: ${currentName}? This will delete all its cities as well.`)) {
      setCountries(countries.map(c => {
        if (c.id === countryId) {
          return { ...c, states: c.states.filter(s => s.id !== stateId) };
        }
        return c;
      }));
    }
  };

  const addCity = (countryId, stateId) => {
    const name = window.prompt("Enter City Name:");
    if (name && name.trim()) {
      setCountries(countries.map(c => {
        if (c.id === countryId) {
          return {
            ...c,
            states: c.states.map(s => {
              if (s.id === stateId) {
                return { ...s, cities: [...s.cities, { id: Date.now(), name: name.trim() }] };
              }
              return s;
            })
          };
        }
        return c;
      }));
    }
  };

  const deleteCity = (countryId, stateId, cityId, currentName) => {
    if (window.confirm(`Are you sure you want to delete city: ${currentName}?`)) {
      setCountries(countries.map(c => {
        if (c.id === countryId) {
          return {
            ...c,
            states: c.states.map(s => {
              if (s.id === stateId) {
                return { ...s, cities: s.cities.filter(city => city.id !== cityId) };
              }
              return s;
            })
          };
        }
        return c;
      }));
    }
  };

  return (
    <div className="app-container">
      <h1>🌍 Geographic Data Manager</h1>
      <div className="header-actions">
        <button className="add-btn root-add-btn" onClick={addCountry}>+ Add Country</button>
      </div>
      
      <div className="countries-container">
        {countries.length === 0 ? (
          <p className="empty-message">No countries added yet. Start by adding a country.</p>
        ) : (
          <CountryList 
            countries={countries}
            editCountry={editCountry}
            deleteCountry={deleteCountry}
            addState={addState}
            editState={editState}
            deleteState={deleteState}
            addCity={addCity}
            deleteCity={deleteCity}
          />
        )}
      </div>
    </div>
  );
}

export default App;
