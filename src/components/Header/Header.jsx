import { GiPalette } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { CiLogin, CiLogout } from "react-icons/ci";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styles from "./Header.module.css";
import clsx from "clsx";
import { signOut } from "firebase/auth";
import { auth } from "../../fireBase/firebase-config";
import { useAuth } from "../../hooks/useAuth";

export default function Header({ openModal }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
              style={({ isActive }) => ({
                color: isActive ? theme.bgColor : theme.textColor,
              })}
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
              style={({ isActive }) => ({
                color: isActive ? theme.bgColor : theme.textColor,
              })}
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
                style={({ isActive }) => ({
                  color: isActive ? theme.bgColor : theme.textColor,
                })}
              >
                Favorite
              </NavLink>
            </li>
          )}
        </ul>
      </nav>

      <ul className={styles.auth}>
        <button onClick={toggleTheme} className={styles.themeToggleBtn}>
          <GiPalette size="24" />
        </button>
        {!authUser ? (
          <>
            <li>
              <button
                className={styles.loginBtn}
                onClick={() => openModal("login")}
                style={{
                  color: theme.textColor,
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = theme.bgColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = theme.textColor;
                }}
              >
                <CiLogin size={20} />
                Log in
              </button>
            </li>
            <li>
              <button
                className={styles.authBtn}
                onClick={() => openModal("register")}
                onMouseEnter={(e) => {
                  e.target.style.color = theme.primaryColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "white";
                }}
              >
                Registration
              </button>
            </li>
          </>
        ) : (
          <li>
            <button
              onClick={handleLogOUt}
              className={styles.logoutBtn}
              onMouseEnter={(e) => {
                e.target.style.color = theme.bgColor;
              }}
              onMouseLeave={(e) => {
                e.target.style.color = theme.textColor;
              }}
            >
              <CiLogout size={20} />
              Log out
            </button>
          </li>
        )}
      </ul>
    </header>
  );
}
