import Header from "./components/Header";
import ThisDay from "./components/ThisDay";
import TodayTemp from "./components/TodayTemp";

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
