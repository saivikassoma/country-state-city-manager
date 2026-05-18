import React, { useState } from "react";
import CountryList from "./CountryList";

// Helper to create unique ids without libraries
const uid = () => Math.floor(Math.random() * 1e9);

export default function App() {
  const [countries, setCountries] = useState([
    // Seed data (optional)
    // { id: uid(), name: "India", states: [
    //   { id: uid(), name: "Karnataka", cities: ["Bangalore", "Mysore"] }
    // ]}
  ]);

  // Country handlers
  const addCountry = () => {
    const name = prompt("Enter country name:");
    if (!name) return;
    setCountries(prev => [...prev, { id: uid(), name: name.trim(), states: [] }]);
  };

  const editCountry = (countryId) => {
    const target = countries.find(c => c.id === countryId);
    if (!target) return;
    const newName = prompt("Enter new country name:", target.name);
    if (!newName || newName.trim() === target.name) return;
    const ok = confirm(`Update country "${target.name}" to "${newName.trim()}"?`);
    if (!ok) return;
    setCountries(prev => prev.map(c => c.id === countryId ? { ...c, name: newName.trim() } : c));
  };

  const deleteCountry = (countryId) => {
    const target = countries.find(c => c.id === countryId);
    if (!target) return;
    const ok = confirm(
      `Delete country "${target.name}" and ALL its states and cities?`
    );
    if (!ok) return;
    setCountries(prev => prev.filter(c => c.id !== countryId));
  };

  // State handlers (scoped by country)
  const addState = (countryId) => {
    const name = prompt("Enter state name:");
    if (!name) return;
    setCountries(prev => prev.map(c => {
      if (c.id !== countryId) return c;
      return {
        ...c,
        states: [...c.states, { id: uid(), name: name.trim(), cities: [] }]
      };
    }));
  };

  const editState = (countryId, stateId) => {
    const country = countries.find(c => c.id === countryId);
    if (!country) return;
    const state = country.states.find(s => s.id === stateId);
    if (!state) return;
    const newName = prompt("Enter new state name:", state.name);
    if (!newName || newName.trim() === state.name) return;
    const ok = confirm(`Update state "${state.name}" to "${newName.trim()}"?`);
    if (!ok) return;
    setCountries(prev => prev.map(c => {
      if (c.id !== countryId) return c;
      return {
        ...c,
        states: c.states.map(s => s.id === stateId ? { ...s, name: newName.trim() } : s)
      };
    }));
  };

  const deleteState = (countryId, stateId) => {
    const country = countries.find(c => c.id === countryId);
    if (!country) return;
    const state = country.states.find(s => s.id === stateId);
    if (!state) return;
    const ok = confirm(`Delete state "${state.name}" and ALL its cities?`);
    if (!ok) return;
    setCountries(prev => prev.map(c => {
      if (c.id !== countryId) return c;
      return {
        ...c,
        states: c.states.filter(s => s.id !== stateId)
      };
    }));
  };

  // City handlers (scoped by country and state)
  const addCity = (countryId, stateId) => {
    const name = prompt("Enter city name:");
    if (!name) return;
    setCountries(prev => prev.map(c => {
      if (c.id !== countryId) return c;
      return {
        ...c,
        states: c.states.map(s => {
          if (s.id !== stateId) return s;
          return { ...s, cities: [...s.cities, name.trim()] };
        })
      };
    }));
  };

  const deleteCity = (countryId, stateId, cityName) => {
    const ok = confirm(`Delete city "${cityName}"?`);
    if (!ok) return;
    setCountries(prev => prev.map(c => {
      if (c.id !== countryId) return c;
      return {
        ...c,
        states: c.states.map(s => {
          if (s.id !== stateId) return s;
          return { ...s, cities: s.cities.filter(city => city !== cityName) };
        })
      };
    }));
  };

  return (
    <div style={{ padding: 16, fontFamily: "sans-serif" }}>
      <h2>Country, State & City Management</h2>
      <button onClick={addCountry}>Add Country</button>
      <CountryList
        countries={countries}
        onEditCountry={editCountry}
        onDeleteCountry={deleteCountry}
        onAddState={addState}
        onEditState={editState}
        onDeleteState={deleteState}
        onAddCity={addCity}
        onDeleteCity={deleteCity}
      />
    </div>
  );
}
