import { Icon } from "../Icons/Icons";
import styles from "./TeacherCard.module.css";
export default function TeacherCard({ teacher }) {
  console.log(teacher);
  return (
    <>
      <div className={styles.avatarImgWrap}>
        <img
          src={teacher.avatar_url}
          alt="avatar_url"
          className={styles.avatarImg}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.headerInfo}>
          <p>Languages</p>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <Icon iconName="book" className={styles.icon} />
              <p>Leson Online</p>
            </li>
            <li className={styles.infoItem}>
              <p>Lessons done: {teacher.lessons_done}</p>
            </li>
            <li className={styles.infoItem}>
              <Icon iconName="star" className={styles.iconStar} />
              <p>Rating : {teacher.rating}</p>
            </li>
            <li className={styles.infoItem}>
              <p>
                Price / 1 hour:{" "}
                <span className={styles.dollars}>
                  {teacher.price_per_hour}$
                </span>
              </p>
            </li>
          </ul>
          <button className={styles.btnHeart}>
            <Icon iconName="heart" className={styles.iconHeart} />
          </button>
        </div>
        <h2 className={styles.name}>{teacher.name}</h2>
        <p className={styles.subInfo}>
          Speaks: <span>{teacher.languages.join(",")}</span>
        </p>
        <p className={styles.subInfo}>
          Lesson Info: <span>{teacher.lesson_info}</span>
        </p>
        <p className={styles.subInfo}>
          Conditions: <span>{teacher.conditions.join("")}</span>
        </p>
        <button>Read more</button>
        <ul className={styles.languageLevelList}>
          {teacher.levels.map((level, index) => (
            <li key={index}>#{level}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
