import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fireBase/firebase-config.js"; // Убедись, что путь к файлу верный
import styles from "./SignIn.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Toaster, toast } from "react-hot-toast";

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function SignIn() {
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
    <div>
      <h1>Sign In</h1>
      <p>Please enter your credentials to log in.</p>
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
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit">Sign In</button>
            <button
              type="button"
              onClick={() => console.log("Close button clicked")}
            >
              Close
            </button>
          </Form>
        )}
      </Formik>
      <Toaster />
    </div>
  );
}
