import styles from "./Button.module.css";
import classNames from "classnames";

export const Button = ({ text, onClick, className, type }) => {
  return (
    <button
      className={classNames(className, styles.btn)}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
