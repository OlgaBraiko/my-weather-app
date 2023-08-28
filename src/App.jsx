import { useEffect, useState } from "react";
import { WeatherDisplay } from "./components/WeatherDisplay";
import { WeatherInput } from "./components/WeatherInput";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);

  const fetchDataWeather = async (url) => {
    try {
      const res = await fetch(url);
      if (res.ok) {
        return await res.json();
      }
      throw new Error("Network response was not ok");
    } catch (error) {
      console.log(`Что-то пошло не так: ${error}`);
      throw error;
    }
  };

  const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

  const weatherApiUrl = new URL(baseUrl);
  const { searchParams } = weatherApiUrl;

  searchParams.append("appid", "5958725e630d014b364c66a9b67d8929");
  searchParams.append("q", city);
  searchParams.append("lang", "ru");
  searchParams.append("units", "metric");

  useEffect(() => {
    if (!city) return;

    const fetchData = async () => {
      try {
        const data = await fetchDataWeather(weatherApiUrl.href);
        setWeather(data);
      } catch (error) {
        /* empty */
      }
    };
    fetchData();
  }, [city]);
  return (
    <>
      <div className="container">
        <WeatherDisplay weather={weather} />
        <WeatherInput setCity={setCity} />
      </div>
    </>
  );
}

export default App;
