import React from "react";
import styles from "./App.module.css";
import { useSelector } from "react-redux";
import { selectTeachers } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchTeachers } from "../../redux/teachers/operations";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  const teachers = useSelector(selectTeachers);
  console.log(teachers);

  return <div className={styles.container}>t</div>;
}
