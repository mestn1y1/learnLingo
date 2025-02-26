import styles from "./Button.module.css";
import classNames from "classnames"; // подключаем библиотеку classnames для удобного объединения классов

export const Button = ({ text, onClick, className, type }) => {
  return (
    <button
      className={classNames(className, styles.btn)} // добавляем переданный класс сюда
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
