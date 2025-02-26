import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Booking.module.css";
import { Icon } from "../Icons/Icons";
import { Button } from "../Button/Button";

const validationSchema = Yup.object({
  reason: Yup.string().required("Please select a reason"),
  fullName: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\+?\d{10,15}$/, "Invalid phone number")
    .required("Phone number is required"),
});

export default function Booking({ onSubmit, teacher, handleClose }) {
  return (
    <div className={styles.container}>
      <button className={styles.closeBtn} onClick={handleClose}>
        <Icon iconName="close" className={styles.iconClose} />
      </button>
      <h2 className={styles.title}>Book trial lesson</h2>
      <p className={styles.description}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your needs.
      </p>

      <div className={styles.teacherInfo}>
        <img
          src={teacher.avatar_url}
          alt={teacher.name}
          className={styles.avatarImg}
        />
        <div>
          <p className={styles.subTitle}>Your teacher</p>
          <h3 className={styles.name}>
            {teacher.name} {teacher.surname}
          </h3>
        </div>
      </div>

      <Formik
        initialValues={{
          reason: "",
          fullName: "",
          email: "",
          phone: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
          handleClose();
        }}
      >
        <Form className={styles.form}>
          <h3 className={styles.titleRadio}>
            What is your main reason for learning English?
          </h3>
          <div className={styles.radioGroup}>
            <ErrorMessage
              name="reason"
              component="div"
              className={styles.error}
            />
            {[
              "Career and business",
              "Lesson for kids",
              "Living abroad",
              "Exams and coursework",
              "Culture, travel or hobby",
            ].map((option) => (
              <label key={option} className={styles.radioLabel}>
                <Field
                  type="radio"
                  name="reason"
                  value={option}
                  className={styles.radio}
                />
                <p className={styles.resonText}>{option}</p>
              </label>
            ))}
          </div>

          <div>
            <ErrorMessage
              name="fullName"
              component="div"
              className={styles.error}
            />
            <Field
              type="text"
              name="fullName"
              placeholder="Full Name"
              className={styles.input}
            />
          </div>

          <div>
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input}
            />
          </div>

          <div>
            <ErrorMessage
              name="phone"
              component="div"
              className={styles.error}
            />
            <Field
              type="tel"
              name="phone"
              placeholder="Phone number"
              className={styles.input}
            />
          </div>

          <Button text="Book" className={styles.bookBtn} type="submit" />
        </Form>
      </Formik>
    </div>
  );
}
