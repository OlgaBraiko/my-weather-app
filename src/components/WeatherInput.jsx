import { useEffect } from "react";

import styles from "./Header.module.css";
import Image from "../../public/Image";

function WeatherInput({ updateWeather }) {
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
              onChange={updateWeather}
              className={styles.list__city}
              type="text"
              placeholder="Выбрать город"
            />
          </label>
          <button type="submit">OK</button>
        </form>
      </div>
    </header>
  );
}

export default WeatherInput;
