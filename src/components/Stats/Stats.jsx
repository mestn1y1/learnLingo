import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styles from "./Stats.module.css";

export default function Stats() {
  const { theme } = useContext(ThemeContext);

  return (
    <ul className={styles.statsList} style={{ borderColor: theme.bgColor }}>
      <li className={styles.statsListItem}>
        <h3>32,000 +</h3>
        <p>Experienced tutors</p>
      </li>
      <li className={styles.statsListItem}>
        <h3>300,000 +</h3>
        <p>5-star tutor reviews</p>
      </li>
      <li className={styles.statsListItem}>
        <h3>120 +</h3>
        <p>Subjects taught</p>
      </li>
      <li className={styles.statsListItem}>
        <h3>200 +</h3>
        <p>Tutor nationalities</p>
      </li>
    </ul>
  );
}
