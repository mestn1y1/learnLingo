import { useSelector } from "react-redux";
import styles from "./Favorite.module.css";
import { selectFavorites } from "../../redux/selectors";
export default function Favorite() {
  const favorite = useSelector(selectFavorites);
  console.log(favorite);
  return <div className={styles.container}>Favorite Component</div>;
}
