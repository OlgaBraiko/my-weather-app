import "./App.css";

import WeatherInput from "./components/WeatherInput";
import WeatherDisplay from "./components/WeatherDisplay";
import TodayTempFetch from "./components/TodayTempFetch";

function App({ props }) {
  return (
    <>
      <div className="container">
        <WeatherInput />
        <WeatherDisplay />
        <TodayTempFetch />
      </div>
    </>
  );
}

export default App;
