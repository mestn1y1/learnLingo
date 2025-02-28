import { Link, NavLink } from "react-router-dom";
import { CiLogin, CiLogout } from "react-icons/ci";
import { toast } from "react-toastify";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styles from "./Header.module.css";
import clsx from "clsx";
import { signOut } from "firebase/auth";
import { auth } from "../../fireBase/firebase-config";
import { useAuth } from "../../hooks/useAuth";

export default function Header({ openModal }) {
  const { toggleTheme } = useContext(ThemeContext);
  const authUser = useAuth();
  const handleLogOUt = () => {
    signOut(auth);

    toast.success(`Bye, see you later, ${authUser.displayName || "User"}!`, {
      autoClose: 2500,
    });
  };

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
        <button onClick={toggleTheme} className={styles.themeToggleBtn}>
          <img src="/images/palette.svg" className={styles.iconPalete} />
        </button>
        {!authUser ? (
          <>
            <li>
              <button
                className={styles.loginBtn}
                onClick={() => openModal("login")}
              >
                <CiLogin size={20} />
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
              Log out
            </button>
          </li>
        )}
      </ul>
    </header>
  );
}
