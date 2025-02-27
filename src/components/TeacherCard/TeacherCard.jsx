import { useState } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFavoriteFromDB,
  addFavoriteToDB,
} from "../../redux/favorites/operations.js";
import styles from "./TeacherCard.module.css";
import { toast } from "react-toastify";

import { selectFavorites } from "../../redux/selectors.js";
import { ModalWrap } from "../ModalWrap/ModalWrap.jsx";
import Booking from "../Booking/Booking.jsx";
import { useAuth } from "../../hooks/useAuth.jsx";

export default function TeacherCard({ teacher }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const authUser = useAuth();
  const isFavorite = favorites.includes(teacher.id);

  const handleBookingSubmit = (values) => {
    toast.success("Your booking has been received! We will contact you soon.", {
      autoClose: 2500,
    });
  };

  const onSwitchFavorite = async () => {
    if (!authUser) {
      toast.warn("Please log in to add to your favorites.", {
        autoClose: 2500,
      });
      return;
    }

    if (isFavorite) {
      dispatch(
        removeFavoriteFromDB({ userId: authUser.uid, teacherId: teacher.id })
      );
      toast.warn("Removed from favorites", {
        autoClose: 2500,
      });
    } else {
      dispatch(
        addFavoriteToDB({ userId: authUser.uid, teacherId: teacher.id })
      );
      toast.success("Added to favorites", {
        autoClose: 2500,
      });
    }
  };

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <div className={styles.avatarImgWrap}>
        <Icon iconName="point" className={styles.iconPoint} />
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

          <button className={styles.btnHeart} onClick={onSwitchFavorite}>
            <Icon
              iconName="heart"
              className={isFavorite ? styles.iconHeartActive : styles.iconHeart}
            />
          </button>
        </div>
        <h2 className={styles.name}>{teacher.name}</h2>
        <p className={styles.subInfo}>
          Speaks:
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
        {isExpanded && <Button text="Book trial lesson" onClick={openModal} />}
      </div>
      <ModalWrap isOpen={isModalOpen} handleClose={closeModal}>
        <Booking
          handleClose={closeModal}
          teacher={teacher}
          onSubmit={handleBookingSubmit}
        />
      </ModalWrap>
    </>
  );
}
