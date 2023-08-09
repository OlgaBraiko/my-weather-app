import Header from "./components/Header";
import TodayTemp from "./components/TodayTemp";
import ThisDay from "./components/ThisDay";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <ThisDay />
        <TodayTemp />
      </div>
    </>
  );
}

export default App;
