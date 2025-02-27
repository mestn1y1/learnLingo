import styles from "./Loader.module.css";
import { FadeLoader } from "react-spinners";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Loader() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <FadeLoader color={theme.bgColor} />
    </div>
  );
}
