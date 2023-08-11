import Header from "./components/Header";
import TodayTemp from "./components/TodayTemp";
import ThisDay from "./components/ThisDay";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <ThisDay
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
        <TodayTemp />
      </div>
    </>
  );
}

export default App;
