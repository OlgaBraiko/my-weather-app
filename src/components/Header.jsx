import styles from "./Header.module.css";
import Image from "../../public/Image";

function Header() {
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
          <input
            className={styles.list__city}
            type="text"
            placeholder="Выбрать город"></input>
        </form>
      </div>
    </header>
  );
}

export default Header;
