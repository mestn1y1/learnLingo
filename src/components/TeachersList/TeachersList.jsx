import { useState, useRef } from "react";
import TeacherCard from "../TeacherCard/TeacherCard";
import styles from "./TeachersList.module.css";
import { Button } from "../Button/Button";

export default function TeachersList({ teachers = [] }) {
  const [visibleCount, setVisibleCount] = useState(4);
  const itemsPerPage = 4;
  const listRef = useRef(null);

  const visibleTeachers = teachers.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + itemsPerPage);

    setTimeout(() => {
      if (listRef.current) {
        listRef.current.lastElementChild.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <>
      <ul className={styles.list} ref={listRef}>
        {visibleTeachers.map((teacher) => (
          <li className={styles.item} key={teacher.id}>
            <TeacherCard teacher={teacher} />
          </li>
        ))}
      </ul>
      {visibleCount < teachers.length && (
        <div className={styles.loadMore}>
          <Button text="Load more" onClick={handleLoadMore} />
        </div>
      )}
    </>
  );
}
