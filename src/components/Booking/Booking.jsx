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
      }}
    >
      {({ isValid, dirty }) => (
        <Form className={styles.form}>
          <h2>Book trial lesson</h2>
          <p>
            Our experienced tutor will assess your current language level,
            discuss your learning goals, and tailor the lesson to your needs.
          </p>

          <div className={styles.teacherInfo}>
            <img
              src={teacher.avatar_url}
              alt={teacher.name}
              className={styles.avatarImg}
            />
            <div>
              <span>Your teacher</span>
              <h2>
                {teacher.name} {teacher.surname}
              </h2>
            </div>
          </div>

          <h3>What is your main reason for learning English?</h3>
          <div className={styles.radioGroup}>
            {[
              "Career and business",
              "Lesson for kids",
              "Living abroad",
              "Exams and coursework",
              "Culture, travel or hobby",
            ].map((option) => (
              <label key={option} className={styles.radioLabel}>
                <Field type="radio" name="reason" value={option} />
                {option}
              </label>
            ))}
            <ErrorMessage
              name="reason"
              component="div"
              className={styles.error}
            />
          </div>

          <Field
            type="text"
            name="fullName"
            placeholder="Full Name"
            className={styles.input}
          />
          <ErrorMessage
            name="fullName"
            component="div"
            className={styles.error}
          />

          <Field
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
          />
          <ErrorMessage name="email" component="div" className={styles.error} />

          <Field
            type="tel"
            name="phone"
            placeholder="Phone number"
            className={styles.input}
          />
          <ErrorMessage name="phone" component="div" className={styles.error} />

          <Button text="Book" className={styles.bookBtn} />
          <button className={styles.closeBtn} onClick={handleClose}>
            <Icon iconName="close" className={styles.iconClose} />
          </button>
        </Form>
      )}
    </Formik>
  );
}
