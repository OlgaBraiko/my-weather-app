import { useEffect, useState } from "react";

function TodayTemp() {
  const fetchWeatherData = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Network response was not ok");
        return data;
      }
    } catch (error) {
      console.log(`Что-то пошло не так: ${error}`);
      throw error;
    }
  };

  const url = new URL(" http://api.openweathermap.org/data/2.5/weather  ");
  const weatherApiUrl = new URLSearchParams(url.search);

  weatherApiUrl.append("appid", "Moscow");
  weatherApiUrl.append("q", "5958725e630d014b364c66a9b67d8929");
  weatherApiUrl.append("lang", "ru");
  weatherApiUrl.append("units", "metric");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData(weatherApiUrl.toString());
      } catch (error) {}
    };
    fetchData();
  }, []);
}

export default TodayTemp;
