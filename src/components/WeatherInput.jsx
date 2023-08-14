import { useEffect, useState } from "react";

import styles from "./Header.module.css";
import Image from "../../public/Image";

import TodayTempFetch from "./TodayTempFetch";

function WeatherInput(props) {
  const [setState] = props;

  //сюда setstate fetch

  function fetchWeather() {
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
        <pre>{JSON.stringify(weatherData)}</pre>;
      </>
    );
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Image id="header-logo" />
        </div>
        <div className={styles.title}>React weather</div>
      </div>
      <div className={styles.wrapper}>
        <Image id="change-theme" />
        <form>
          <label>
            <input
              city={city}
              className={styles.list__city}
              type="text"
              placeholder="Выбрать город"
            />
          </label>
          <button onClick={fetchWeather} type="submit">
            OK
          </button>
        </form>
      </div>
    </header>
  );
}

export default WeatherInput;
