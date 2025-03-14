import { Suspense, lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import { ModalWrap } from "../ModalWrap/ModalWrap";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Loader from "../Loader/Loader";
import { ThemeProvider } from "../context/ThemeProvider";

const Home = lazy(() => import("../../pages/Home/Home"));
const Teachers = lazy(() => import("../../pages/Teachers/Teachers"));
const Favorite = lazy(() => import("../../pages/Favorite/Favorite"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  const authUser = useAuth();

  return (
    <ThemeProvider>
      <Header openModal={openModal} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route
            path="/favorite"
            element={
              <PrivateRoute authUser={authUser}>
                <Favorite />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ModalWrap isOpen={isModalOpen} handleClose={closeModal}>
        {modalType === "register" && <SignUp handleClose={closeModal} />}
        {modalType === "login" && <SignIn handleClose={closeModal} />}
      </ModalWrap>
      <ToastContainer position="top-right" />
    </ThemeProvider>
  );
}
