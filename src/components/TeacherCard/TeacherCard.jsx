import { useState } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice.js";
import styles from "./TeacherCard.module.css";
import { selectFavorites } from "../../redux/selectors.js";

export default function TeacherCard({ teacher }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some((fav) => fav.id === teacher.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(teacher.id));
    } else {
      dispatch(addFavorite(teacher));
    }
  };

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

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
          <p className={styles.language}>Languages</p>
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
          <button className={styles.btnHeart} onClick={toggleFavorite}>
            <Icon
              iconName="heart"
              className={isFavorite ? styles.iconHeartActive : styles.iconHeart}
            />
          </button>
        </div>
        <h2 className={styles.name}>{teacher.name}</h2>
        <p className={styles.subInfo}>
          Speaks:{" "}
          <span className={styles.spanUnderscore}>
            {teacher.languages.join(",")}
          </span>
        </p>
        <p className={styles.subInfo}>
          Lesson Info: <span>{teacher.lesson_info}</span>
        </p>
        <p className={styles.subInfo}>
          Conditions: <span>{teacher.conditions.join("")}</span>
        </p>

        {isExpanded && (
          <>
            <p className={styles.description}>{teacher.experience}</p>
            <ul className={styles.reviewsList}>
              {teacher.reviews.map((review, index) => (
                <li key={index}>
                  <div className={styles.reviewWrap}>
                    <img
                      src={
                        review.gender === "male"
                          ? "/images/man.svg"
                          : "/images/girl.svg"
                      }
                      alt="avatar"
                      className={styles.reviewAvatar}
                    />
                    <div className={styles.reviewInfoWrap}>
                      <h3 className={styles.reviewerName}>
                        {review.reviewer_name}
                      </h3>
                      <div className={styles.ratingWrap}>
                        <Icon iconName="star" className={styles.iconStar} />
                        <span>{Number(review.reviewer_rating).toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                  <p className={styles.reviewComment}>{review.comment}</p>
                </li>
              ))}
            </ul>
          </>
        )}

        <button className={styles.readMoreBtn} onClick={toggleExpanded}>
          {isExpanded ? "Hide" : "Read more"}
        </button>

        <ul className={styles.languageLevelList}>
          {teacher.levels.map((level, index) => (
            <li key={index}>#{level}</li>
          ))}
        </ul>
        {isExpanded && <Button text="Book trial lesson" />}
      </div>
    </>
  );
}
