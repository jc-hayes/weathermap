//eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import './App.css';
import Weather from './Weather.js';
require('dotenv/config');

const App = () => {
  
  const [weather, setWeather] = useState([]);
  const [weatherSys, setWeatherSys] = useState([]);
  const [weatherInfo, setWeatherInfo] = useState({});
  const [weatherMain, setWeatherMain] = useState({});
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Bothell');

  useEffect(() => {
    getWeather();
  }, [query]);

  const getWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_ID}`);
    const data = await response.json();
    setWeather(data);
    setWeatherSys(data.sys);
    setWeatherInfo(data.weather[0]);
    setWeatherMain(data.main);
  };

  const updateSearch = e => {
      setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

    return(
      <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input 
            className="search-bar"
            type="text"
            placeholder="Enter city, country code (eg: Seattle,US or Seattle)"
            value={search}
            onChange={updateSearch}
          />
          <button type="submit" className="search-button">Search</button>
        </form>
        <div className="weather-data">
          <Weather
            key={weather.id}
            city={weather.name}
            country={weatherSys.country}
            description={weatherInfo.description}
            temp={weatherMain.temp}
            humidity={weatherMain.humidity}
          />
        </div>
      </div>
    );
};

export default App;