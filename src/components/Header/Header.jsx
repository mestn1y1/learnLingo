import { Link, NavLink } from "react-router-dom";
import { CiLogin, CiLogout } from "react-icons/ci";
import styles from "./Header.module.css";
import clsx from "clsx";
import { signOut } from "firebase/auth";
import { auth } from "../../fireBase/firebase-config";
import { useAuth } from "../../hooks/useAuth";
export default function Header({ openModal }) {
  const handleLogOUt = () => {
    signOut(auth);
  };

  const authUser = useAuth();

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
          {authUser && (
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
        {!authUser ? (
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
                Registration
              </button>
            </li>
          </>
        ) : (
          <li>
            <button onClick={handleLogOUt} className={styles.logoutBtn}>
              <CiLogout size={20} />
            </button>
          </li>
        )}
      </ul>
    </header>
  );
}
