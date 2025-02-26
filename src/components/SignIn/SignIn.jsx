import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fireBase/firebase-config.js";
import styles from "./SignIn.module.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Icon } from "../Icons/Icons.jsx";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { Button } from "../Button/Button.jsx";

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function SignIn({ handleClose }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = async (values) => {
    const { email, password } = values;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Successfully signed in!");
    } catch (error) {
      toast.error("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <button type="button" onClick={handleClose} className={styles.closeBtn}>
        <Icon iconName="close" className={styles.iconClose} />
      </button>
      <h1 className={styles.title}>Log In</h1>
      <p className={styles.description}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SigninSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
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

            <Button text="Sign In" className={styles.signInBtn} />
          </Form>
        )}
      </Formik>
    </div>
  );
}
