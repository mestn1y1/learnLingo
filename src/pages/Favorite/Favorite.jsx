import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Favorite.module.css";
import {
  selectFavorites,
  selectIsLoading,
  selectTeachers,
} from "../../redux/selectors";
import { fetchTeachers } from "../../redux/teachers/operations";
import TeachersList from "../../components/TeachersList/TeachersList";
import Loader from "../../components/Loader/Loader";

export default function Favorite() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  const loading = useSelector(selectIsLoading);
  const favoriteIDs = useSelector(selectFavorites);
  const teachers = useSelector(selectTeachers);
  const favorites = teachers.filter((teacher) =>
    favoriteIDs.includes(teacher.id)
  );

  if (loading) {
    return <Loader />;
  }

  if (favorites.length === 0) {
    return (
      <h2 className={styles.noFavorites}>
        You have not added any teachers to your favorites yet.
      </h2>
    );
  }

  return (
    <section className={styles.sectionTeachers}>
      <TeachersList teachers={favorites} />
    </section>
  );
}
