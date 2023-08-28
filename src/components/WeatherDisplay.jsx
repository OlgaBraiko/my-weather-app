/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import styles from "./WeatherDisplay.module.css";
import Image from "../../public/Image";

export const WeatherDisplay = ({ weather, fetchDataWeather }) => {
  return (
    <>
      <header className={styles.today}>
        <div className={styles.top__block}>
          <div className={styles.top__block_wrapper}>
            <div className={styles.this__temp}>
              Температура:
              <span>&nbsp;{Math.trunc(weather?.main?.temp ?? "-")}℃.</span>
            </div>
            <div className={styles.this__day}>
              {new Date().toLocaleString("ru-RU", {
                month: "long",
                day: "2-digit",
              })}
            </div>
          </div>
          <Image id="sun" />
        </div>

        <div className={styles.bottom__block}>
          <div className={styles.this__time}>
            Время:
            <span>
              {new Date().toLocaleString("ru-RU", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
          <div className={styles.this__city}>
            Город:
            <span>&nbsp;{weather?.name ?? "-"};</span>
            <pre>{JSON.stringify(fetchDataWeather)}</pre>
          </div>
        </div>
      </header>

      <div className="wrapper"></div>
    </>
  );
};
