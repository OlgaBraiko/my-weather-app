import { useEffect, useState } from "react";

import styles from "./Header.module.css";
import Image from "../../public/Image";

import TodayTempFetch from "./TodayTempFetch";

function WeatherInput() {
  const [city, setCity] = useState;

  function updateCity() {
    setCity({ city: data.name });
  }

  return (
    <header className={styles.header}>
      <TodayTempFetch data={data} />
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Image id="header-logo" />
        </div>
        <div className={styles.title}>React weather</div>
      </div>
      <div className={styles.wrapper}>
        <Image id="change-theme" />
        <form onChange={updateCity}>
          <label>
            <input
              city={city}
              className={styles.list__city}
              type="text"
              placeholder="Выбрать город"
            />
          </label>
          <button type="submit">Click</button>
        </form>
      </div>
    </header>
  );
}

export default WeatherInput;
