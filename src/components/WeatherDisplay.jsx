import styles from "./ThisDay.module.css";
import Image from "../../public/Image";
import WeatherInput from "./WeatherInput";

const obj = JSON.parse(
  '"coord":{"lon":37.6156,"lat":55.7522},"weather":[{"id":803,"main":"Clouds","description":"облачно с прояснениями","icon":"04n"}],"base":"stations","main":{"temp":13.54,"feels_like":12.88,"temp_min":12.86,"temp_max":14.75,"pressure":1010,"humidity":74,"sea_level":1010,"grnd_level":993},"visibility":10000,"wind":{"speed":2.14,"deg":282,"gust":3.8},"clouds":{"all":53},"dt":1692743131,"sys":{"type":2,"id":47754,"country":"RU","sunrise":1692756965,"sunset":1692809336},"timezone":10800,"id":524901,"name":"Moscow","cod":200"'
);
console.log(obj);

function WeatherDisplay({ state, id, temp_min, temp_max, country, name }) {
  return (
    <>
      <header className={styles.today}>
        <div className={styles.top__block}>
          <div className={styles.top__block_wrapper}>
            {state && <WeatherInput state={state} />}
            <div className={styles.this__temp}>
              {temp_min}
              {temp_max}
            </div>
            <div className={styles.this__day}>Сегодня</div>
          </div>
          <Image id="sun" />
        </div>

        <div className={styles.bottom__block}>
          <div className={styles.this__time}>
            Время: <span>21:54</span>
          </div>
          <div className={styles.this__city}>
            Город:
            <span>
              {country}
              {name}
            </span>
          </div>
        </div>
      </header>

      <div className="wrapper"></div>
    </>
  );
}
export default WeatherDisplay;
