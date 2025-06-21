import React, { useState } from 'react';

const API_KEY = "6b8475d1939bb5502208fc73e60459e5";


import './App.css'

function App() {
 
const [city, setCity] = useState('');
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchWeather() {
    if (!city) return;
    setLoading(true);
    setError(null);
    setCurrent(null);
    setForecast(null);

    try {
      
      const currentRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!currentRes.ok) throw new Error('City not found');
      const currentData = await currentRes.json();

     
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!forecastRes.ok) throw new Error('Forecast not found');
      const forecastData = await forecastRes.json();

      setCurrent(currentData);

     
      const daily = forecastData.list.filter((item) =>
        item.dt_txt.includes('12:00:00')
      );
      setForecast(daily);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchWeather();
  }

  
  function formatDate(dt_txt) {
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    return new Date(dt_txt).toLocaleDateString(undefined, options);
  }

  return (
    <>
       <div className="weather-container">
      <h1>🌤️ Weather App</h1>
      <form onSubmit={handleSubmit} className="weather-form">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="weather-input"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>

      {loading && <p className="info">Loading...</p>}

      {error && <p className="error">{error}</p>}

      {current && (
        <div className="weather-result">
          <h2>
            {current.name}, {current.sys.country}
          </h2>
          <div className="weather-main">
            <img
              src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
              alt={current.weather[0].description}
            />
            <p className="temp">{Math.round(current.main.temp)}°C</p>
          </div>
          <p className="condition">{current.weather[0].description}</p>
          <p>Humidity: {current.main.humidity}%</p>
          <p>Wind Speed: {current.wind.speed} m/s</p>
        </div>
      )}

      {forecast && (
        <div className="forecast-container">
          {forecast.map((day) => (
            <div key={day.dt} className="forecast-card">
              <p className="forecast-date">{formatDate(day.dt_txt)}</p>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
              />
              <p className="forecast-temp">
                {Math.round(day.main.temp_min)}° / {Math.round(day.main.temp_max)}°C
              </p>
              <p className="forecast-condition">{day.weather[0].description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  )
}

export default App
