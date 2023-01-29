import React, { useState, useEffect } from "react";
import "./style.css";
const API_KEY = "e687a687772c915acc0c86a9e31cdc0f";

function WeatherApp() {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("Bishkek");

  useEffect(() => {
    async function fetchWeatherData() {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
      );
      setWeatherData(res.data);
    }
    fetchWeatherData();
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    setLocation(e.target.city.value);
  };

  return (

    <><div class="cloudPane">
      <div class="stars">
        <div class="star" id="star1"></div>
        <div class="star"></div>
        <div class="star" id="star2"></div>
        <div class="star"></div>
        <div class="star" id="star3"></div>
        <div class="star"></div>
        <div class="star" id="star4"></div>
        <div class="star"></div>
        <div class="star" id="star5"></div>
        <div class="star"></div>
        <div class="star" id="star6"></div>
        <div class="star"></div>
        <div class="star" id="star7"></div>
        <div class="star"></div>
        <div class="star" id="star8"></div>
        <div class="star"></div>
        <div class="star" id="star9"></div>
        <div class="star"></div>
        <div class="star" id="star10"></div>
        <div class="star"></div>
        <div class="star" id="star11"></div>
        <div class="star"></div>
      </div>

      <div class="bigCloud" id="cloud1">
        <div class="largeCircle" id="circ1">

          <div class="largeCircle" id="circ1shadow"></div>
        </div>
        <div class="middleCircle" id="circ2">
          <div class="middleCircle" id="circ2shadow"></div>
        </div>
        <div class="middleCircle" id="circ3">
          <div class="middleCircle" id="circ3shadow"></div>
        </div>
        <div class="smallCircle" id="circ4"></div>
        <div class="smallCircle" id="circ5">
          <div class="smallCircle" id="circ5shadow"></div>
        </div>
        <div class="smallCircle" id="circ6">
          <div class="smallCircle" id="circ6shadow"></div>
        </div>
      </div>
      <div class="bigCloud" id="cloud2">
        <div class="largeCircle" id="circ1">
          <div class="largeCircle" id="circ1shadow"></div>
        </div>
        <div class="middleCircle" id="circ2">
          <div class="middleCircle" id="circ2shadow"></div>
        </div>
        <div class="middleCircle" id="circ3">
          <div class="middleCircle" id="circ3shadow"></div>
        </div>
        <div class="smallCircle" id="circ4"></div>
        <div class="smallCircle" id="circ5">
          <div class="smallCircle" id="circ5shadow"></div>
        </div>
        <div class="smallCircle" id="circ6">
          <div class="smallCircle" id="circ6shadow"></div>
        </div>
      </div>

      <div class="bigCloud" id="cloud3">
        <div class="largeCircle" id="circ1">
          <div class="largeCircle" id="circ1shadow"></div>
        </div>
        <div class="middleCircle" id="circ2">
          <div class="middleCircle" id="circ2shadow"></div>
        </div>
        <div class="middleCircle" id="circ3">
          <div class="middleCircle" id="circ3shadow"></div>
        </div>
        <div class="smallCircle" id="circ4"></div>
        <div class="smallCircle" id="circ5">
          <div class="smallCircle" id="circ5shadow"></div>
        </div>
        <div class="smallCircle" id="circ6">
          <div class="smallCircle" id="circ6shadow"></div>
        </div>
      </div>

      <div class="bigCloud" id="cloud4">
        <div class="largeCircle" id="circ1">
          <div class="largeCircle" id="circ1shadow"></div>
        </div>
        <div class="middleCircle" id="circ2">
          <div class="middleCircle" id="circ2shadow"></div>
        </div>
        <div class="middleCircle" id="circ3">
          <div class="middleCircle" id="circ3shadow"></div>
        </div>
        <div class="smallCircle" id="circ4"></div>
        <div class="smallCircle" id="circ5">
          <div class="smallCircle" id="circ5shadow"></div>
        </div>
        <div class="smallCircle" id="circ6">
          <div class="smallCircle" id="circ6shadow"></div>
        </div>
      </div>

      <div class="bigCloud" id="cloud5">
        <div class="largeCircle" id="circ1">
          <div class="largeCircle" id="circ1shadow"></div>
        </div>
        <div class="middleCircle" id="circ2">
          <div class="middleCircle" id="circ2shadow"></div>
        </div>
        <div class="middleCircle" id="circ3">
          <div class="middleCircle" id="circ3shadow"></div>
        </div>
        <div class="smallCircle" id="circ4"></div>
        <div class="smallCircle" id="circ5">
          <div class="smallCircle" id="circ5shadow"></div>
        </div>
        <div class="smallCircle" id="circ6">
          <div class="smallCircle" id="circ6shadow"></div>
        </div>
      </div>

      <div class="bigCloud" id="cloud6">
        <div class="largeCircle" id="circ1">
          <div class="largeCircle" id="circ1shadow"></div>
        </div>
        <div class="middleCircle" id="circ2">
          <div class="middleCircle" id="circ2shadow"></div>
        </div>
        <div class="middleCircle" id="circ3">
          <div class="middleCircle" id="circ3shadow"></div>
        </div>
        <div class="smallCircle" id="circ4"></div>
        <div class="smallCircle" id="circ5">
          <div class="smallCircle" id="circ5shadow"></div>
        </div>
        <div class="smallCircle" id="circ6">
          <div class="smallCircle" id="circ6shadow"></div>
        </div>
      </div>

      <div class="bigCloud" id="cloud7">
        <div class="largeCircle" id="circ1">
          <div class="largeCircle" id="circ1shadow"></div>
        </div>
        <div class="middleCircle" id="circ2">
          <div class="middleCircle" id="circ2shadow"></div>
        </div>
        <div class="middleCircle" id="circ3">
          <div class="middleCircle" id="circ3shadow"></div>
        </div>
        <div class="smallCircle" id="circ4"></div>
        <div class="smallCircle" id="circ5">
          <div class="smallCircle" id="circ5shadow"></div>
        </div>
        <div class="smallCircle" id="circ6">
          <div class="smallCircle" id="circ6shadow"></div>
        </div>
      </div>
    </div><><header className="header">
      <h1 className="header__title">Weather App</h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">Home</li>
          <li className="header__nav-item">About</li>
          <li className="header__nav-item">Contact</li>
        </ul>
      </nav>
    </header><div className="WeatherApp">


          <h1 className="WeatherApp__title">Weather App</h1>
          <form className="WeatherApp__form" onSubmit={handleSearch}>
            <label>
              Location:
              <input
                className="WeatherApp__input"
                type="text"
                name="city"
                placeholder="Enter city name" />
            </label>
            <button className="WeatherApp__button" type="submit">Search</button>
          </form>
          {weatherData.main && (
            <div className="WeatherApp__data">
              <h2 className="WeatherApp__location">Weather for {weatherData.name}</h2>
              <p className="WeatherApp__temp">Temperature: {Math.floor(weatherData.main.temp - 273.15)}°C</p>
              <p className="WeatherApp__desc">Weather: {weatherData.weather[0].description}</p>
            </div>
          )}
        </div></></>
  );
}

export default WeatherApp;
