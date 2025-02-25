import styles from "./Button.module.css";
import classNames from "classnames"; // подключаем библиотеку classnames для удобного объединения классов

export const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={classNames(styles.btn, className)} // добавляем переданный класс сюда
      onClick={onClick}
    >
      {text}
    </button>
  );
};
