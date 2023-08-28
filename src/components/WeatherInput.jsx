import { useState } from "react";
import styles from "./WeatherInput.module.css";
import Image from "../../public/Image";

export const WeatherInput = ({ setCity }) => {
  const [cityname, setCityName] = useState("");
  return (
    <header className={styles.header}>
      <div className={styles.title}>React weather</div>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Image id="header-logo" />
        </div>
      </div>
      <div className={styles.wrapper}>
        <Image id="change-theme" />

        <label>
          <input
            onChange={(e) => setCityName(e.target.value)}
            value={cityname}
            className={styles.list__city}
            type="text"
            placeholder="Выбрать город"
          />
        </label>
        <button onClick={() => setCity(cityname)} type="submit">
          OK
        </button>
      </div>
    </header>
  );
};
