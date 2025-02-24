import TeacherCard from "../TeacherCard/TeacherCard";
import styles from "./TeachersList.module.css";

export default function TeachersList({ teachers = [] }) {
  return (
    <ul>
      {teachers.map((teacher) => (
        <li className={styles.item} key={teacher.id}>
          <TeacherCard teacher={teacher} />
        </li>
      ))}
    </ul>
  );
}
