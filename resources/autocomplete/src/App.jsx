import React, { useState } from 'react';
import countryData from './resources/countryData.json';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [dropDown, setDropDown] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  function handleChange(el) {
    setText(el.target?.value || "");
    setDropDown(countryData.filter(country => country.name.toLowerCase().startsWith(text.toLowerCase())));
    setShowSuggestions(true);
  }

  function handleEscape(el) {
    if (el.keyCode === 27) {
      setShowSuggestions(false);
      console.log('Escape');
    }
  }

  return (
    <div className='app-container'>
      <h1>Search Box</h1>
      <div className="search-wrapper">
        <input
          type='text'
          onChange={handleChange}
          onKeyDown={handleEscape}
          list='suggestions'
          className='search-input'
        />
        <datalist id='suggestions' className={showSuggestions ? 'display' : 'hidden'}>
          {showSuggestions && dropDown.map((country, i) => (
            <option key={i} value={country.name}></option>
          ))}
        </datalist>
      </div>
      {/* Add functionality to the search button if needed */}
      <button className='search-button'>Search</button>
    </div>
  );
}

export default App;
