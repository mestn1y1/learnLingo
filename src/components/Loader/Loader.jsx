import styles from "./Loader.module.css";
import { FadeLoader } from "react-spinners";
export default function Loader() {
  return (
    <div className={styles.container}>
      <FadeLoader color="#f4c550" />
    </div>
  );
}
