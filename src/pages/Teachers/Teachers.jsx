import styles from "./Teachers.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../redux/teachers/operations";
import { selectIsLoading, selectTeachers } from "../../redux/selectors";
import TeachersList from "../../components/TeachersList/TeachersList";

export default function Teachers({ authUser }) {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  return (
    <section className={styles.sectionTeachers}>
      <TeachersList teachers={teachers} authUser={authUser} />
    </section>
  );
}
