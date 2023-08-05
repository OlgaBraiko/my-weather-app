import { useState } from "react";

import styles from "./Header.module.css";
import Image from "../../public/Image";

function Header() {
  const [input, setInput] = useState("");

  function inputCity(event) {
    event.preventDefault();
    const userData = {
      input: input,
    };
    console.log(userData);
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
        <form onSubmit={inputCity}>
          <label>
            <input
              className={styles.list__city}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Выбрать город"
            />
          </label>
          <button type="submit">Click</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
