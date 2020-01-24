//eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import './App.css';
import Weather from './Weather.js';

const App = () => {
  
  const [weather, setWeather] = useState([]);
  const [weatherSys, setWeatherSys] = useState([]);
  const [weatherInfo, setWeatherInfo] = useState({});
  const [weatherMain, setWeatherMain] = useState({});
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('seattle,us');

  useEffect(() => {
    getWeather();
  }, [query]);

  const APP_ID = '4d5ece97315492a895ae0fad7328bf6a';

  const getWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APP_ID}`);
    const data = await response.json();
    setWeather(data);
    setWeatherSys(data.sys);
    setWeatherInfo(data.weather[0]);
    setWeatherMain(data.main);
    console.log(data);
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