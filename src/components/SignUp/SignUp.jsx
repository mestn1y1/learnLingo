import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, db } from "../../fireBase/firebase-config.js";
import styles from "./SignUp.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Toaster, toast } from "react-hot-toast";
import { Button } from "../Button/Button.jsx";
import { Icon } from "../Icons/Icons.jsx";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function SignUp({ handleClose }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (values, actions) => {
    const { name, email, password } = values;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await set(ref(db, `users/${user.uid}`), {
        name,
        email,
        createdAt: new Date().toISOString(),
      });

      toast.success("User created successfully!");
      actions.resetForm();
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Apologies, an error occurred. Please try again later!");
    }
  };

  return (
    <div className={styles.container}>
      <button type="button" onClick={handleClose} className={styles.closeBtn}>
        <Icon iconName="close" className={styles.iconClose} />
      </button>
      <h1 className={styles.title}>Registration</h1>
      <p className={styles.description}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="name"></label>
              <ErrorMessage
                name="name"
                component="span"
                className={styles.error}
              />
              <Field
                name="name"
                type="text"
                className={styles.input}
                placeholder="Name"
              />
            </div>

            <div>
              <label htmlFor="email"></label>
              <ErrorMessage
                name="email"
                component="span"
                className={styles.error}
              />
              <Field
                name="email"
                type="email"
                className={styles.input}
                placeholder="Email"
              />
            </div>

            <div className={styles.passwordContainer}>
              <label htmlFor="password"></label>
              <ErrorMessage
                name="password"
                component="span"
                className={styles.error}
              />
              <div className={styles.inputWrapper}>
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className={styles.input}
                  placeholder="Password"
                />
                <button
                  type="button"
                  className={styles.toggleButton}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            <Button text="SignUp" type="submit" className={styles.signUpBtn} />
          </Form>
        )}
      </Formik>
      <Toaster />
    </div>
  );
}
