import { useState } from "react";
import "./App.css";

import WeatherInput from "./components/WeatherInput";
import WeatherDisplay from "./components/WeatherDisplay";
import TodayTempFetch from "./components/TodayTempFetch";

function App() {
  const [state, setState] = useState(null);

  function updateWeather() {
    setState({
      temp_max: data.main.temp,
      city: data.name,
      country: data.sys.country,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      error: "",
    });
  }

  return (
    <>
      <div className="container">
        <WeatherInput updateWeather={updateWeather} />
        <WeatherDisplay state={state} />
        <TodayTempFetch />
      </div>
    </>
  );
}

export default App;
