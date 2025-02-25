import styles from "./Modal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const ModalWrap = ({ children, isOpen, handleClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      overlayClassName={styles.modalBackdrop}
      bodyOpenClassName="no-scroll"
      className={styles.modalContent}
    >
      {children}
    </Modal>
  );
};
