import React from "react";
import styles from "./App.module.css";
import { useSelector } from "react-redux";
import { selectTeachers } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchTeachers } from "../../redux/teachers/operations";
import { useDispatch } from "react-redux";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  const teachers = useSelector(selectTeachers);
  console.log(teachers);

  return (
    <>
      <h1>APP Component</h1>
    </>
  );
}
