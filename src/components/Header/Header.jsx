import { Link, NavLink } from "react-router-dom";
import { CiLogin, CiLogout } from "react-icons/ci";
import styles from "./Header.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/selectors";

export default function Header({ openModal }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/images/ukraine.png" alt="logo" />
        <span>LearnLingo</span>
      </Link>

      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                clsx(styles.link, { [styles.activeLink]: isActive })
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teachers"
              className={({ isActive }) =>
                clsx(styles.link, { [styles.activeLink]: isActive })
              }
            >
              Teachers
            </NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink
                to="/favorite"
                className={({ isActive }) =>
                  clsx(styles.link, { [styles.activeLink]: isActive })
                }
              >
                Favorite
              </NavLink>
            </li>
          )}
        </ul>
      </nav>

      <ul className={styles.auth}>
        {!isLoggedIn ? (
          <>
            <li>
              <button
                className={styles.loginBtn}
                onClick={() => openModal("login")}
              >
                <CiLogin size={20} color="#F4C550" />
                Log in
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
          </>
        ) : (
          <li>
            <button className={styles.logoutBtn}>
              <CiLogout size={20} />
            </button>
          </li>
        )}
      </ul>
    </header>
  );
}
