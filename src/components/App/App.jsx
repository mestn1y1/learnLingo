import styles from "./App.module.css";
import { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Home = lazy(() => import("../../pages/Home/Home"));
const Teachers = lazy(() => import("../../pages/Teachers/Teachers"));
const Favorite = lazy(() => import("../../pages/Favorite/Favorite"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          {/* <Route
            path="/favorite"
            element={
              <PrivateRoute>
                <Favorite />
              </PrivateRoute>
            }
          /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
