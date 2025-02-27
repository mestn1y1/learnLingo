import { useContext } from "react";
import { ThemeContext } from "../../components/context/ThemeContext";
import styles from "./Home.module.css";
import { Button } from "../../components/Button/Button";
import Stats from "../../components/Stats/Stats";
import { Link } from "react-router-dom";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <h1 className={styles.title}>
            Unlock your potential with the best{" "}
            <span style={{ backgroundColor: theme.primaryColor }}>
              language
            </span>{" "}
            tutors
          </h1>
          <p className={styles.description}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>

          <Link to="/teachers">
            <Button text="Get started" />
          </Link>
        </div>
        <img src={theme.image} alt="girl_with_laptop" className={styles.img} />
      </div>
      <Stats />
    </>
  );
}
