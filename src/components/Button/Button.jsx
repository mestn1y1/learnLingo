import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styles from "./Button.module.css";
import classNames from "classnames";

export const Button = ({ text, onClick, className, type }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      className={classNames(className, styles.btn)}
      onClick={onClick}
      type={type}
      style={{
        backgroundColor: theme.primaryColor,
        color: theme.textColor,
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = theme.bgColor;
        e.target.style.color = theme.textColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = theme.primaryColor;
        e.target.style.color = theme.textColor;
      }}
    >
      {text}
    </button>
  );
};
