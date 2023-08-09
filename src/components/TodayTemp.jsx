import { useEffect, useState } from "react";

function TodayTemp() {
  const [weatherData, setWeatherData] = useState(null);

  const url = new URL(" http://api.openweathermap.org/data/2.5/weather  ");
  const weatherApiUrl = new URLSearchParams(url.search);

  weatherApiUrl.append("appid", "Moscow RU");
  weatherApiUrl.append("q", "5958725e630d014b364c66a9b67d8929");
  weatherApiUrl.append("lang", "ru");
  weatherApiUrl.append("units", "metric");

  const fetchWeatherData = async (url) => {
    try {
      const res = await fetch(url);
      if (!!res.ok) {
        return weatherData;
      }
      throw new Error("Network response was not ok");
    } catch (error) {
      console.log(`Что-то пошло не так: ${error}`);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData(weatherApiUrl.toString());
        setWeatherData(data);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return <div>{weatherData}</div>;
}

export default TodayTemp;
