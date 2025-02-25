import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header({ openModal }) {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/images/ukraine.png" alt="logo" />
        <span>LearnLingo</span>
      </Link>

      <nav>
        <ul className={styles.nav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/teachers">Teachers</Link>
          </li>
          <li>
            <Link to="/favorite">Favorite</Link>
          </li>
        </ul>
      </nav>

      <ul className={styles.auth}>
        <li>
          <button className={styles.authBtn} onClick={() => openModal("login")}>
            Sign In
          </button>
        </li>
        <li>
          <button
            className={styles.authBtn}
            onClick={() => openModal("register")}
          >
            Sign Up
          </button>
        </li>
        <li>
          <button className={styles.authBtn}>Log Out</button>
        </li>
      </ul>
    </header>
  );
}
