import { useEffect, useState } from "react";

function TodayTempFetch() {
  const [weatherData, setWeatherData] = useState([]);
  const fetchWeatherData = async (url) => {
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
  searchParams.append("q", "Moscow ,RU");
  searchParams.append("lang", "ru");
  searchParams.append("units", "metric");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData(weatherApiUrl.href);
        setWeatherData(data);
        console.log(weatherApiUrl);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <>
      {/* {obj.map((obj,i)=>(

    ))} */}
      <pre>{JSON.stringify(weatherData)}</pre>;
    </>
  );
}
export default TodayTempFetch;
