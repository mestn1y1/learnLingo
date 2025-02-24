import { Link } from "react-router-dom";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/images/ukraine.png" alt="logo" />
        <span>LearnLingo</span>
      </Link>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Teachers</Link>
          </li>
          <li>
            <Link>Favorite</Link>
          </li>
        </ul>
      </nav>
      <ul className={styles.auth}>
        <li>
          <Link>SignIn</Link>
        </li>
        <li>
          <Link>SignUp</Link>
        </li>
        <li>
          <Link>LogOut</Link>
        </li>
      </ul>
    </header>
  );
}
