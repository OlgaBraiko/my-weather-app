import { useState } from "react";

import styles from "./ThisDay.module.css";
import Image from "../../public/Image";

import WeatherInput from "./WeatherInput";

function WeatherDisplay(props) {
  const [state] = props;

  //сюда state
  //готовая погода

  return (
    <>
      <header className={styles.today}>
        {state && <TodayTempFetch state={state} />}
        <div className={styles.top__block}>
          <div className={styles.top__block_wrapper}>
            <div className={styles.this__temp}>20</div>
            <div className={styles.this__day}>Сегодня</div>
          </div>
          <Image id="sun" />
        </div>

        <div className={styles.bottom__block}>
          <div className={styles.this__time}>
            Время: <span>21:54</span>
          </div>
          <div className={styles.this__city}>
            Город: <span>Санкт-Петербург</span>
          </div>
        </div>
      </header>

      <div className="wrapper"></div>
    </>
  );
}
export default WeatherDisplay;
