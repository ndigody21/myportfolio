import styles from "./MobileNav.module.css";

function MobileNav() {
  return (
    <div className="sm:hidden font-mono visible">
      <input
        type="checkbox"
        className={styles.navigation__checkbox}
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className={styles.navigation__button}>
        <span className={styles.navigation__icon}>&nbsp;</span>
      </label>

      <div className={styles.navigation__background}>&nbsp;</div>

      <nav className={styles.navigation__nav}>
        <ul className={styles.navigation__list}>
          <li className={styles.navigation__item}>
            <a href="#" className={styles.navigation__link}>
              home
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#" className={styles.navigation__link}>
              about
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#" className={styles.navigation__link}>
              services
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#" className={styles.navigation__link}>
              resume
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#" className={styles.navigation__link}>
              blog
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#" className={styles.navigation__link}>
              contacts
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileNav;
