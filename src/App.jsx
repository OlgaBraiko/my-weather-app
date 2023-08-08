import Header from "./components/Header";
import ThisDay from "./components/ThisDay";
import fetchWeatherData from "./components/fetchWeatherData";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <ThisDay />
        <fetchWeatherData />
      </div>
    </>
  );
}

export default App;
