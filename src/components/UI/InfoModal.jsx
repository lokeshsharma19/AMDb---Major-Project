import React from "react";
import styles from "./InfoModal.module.css";
import { createPortal } from "react-dom";

function InfoModal({ children, handleCloseModal }) {
  return createPortal(
    <>
      <div onClick={handleCloseModal} className={styles.modalBackDrop}></div>
      <div className={styles.modalContent}>{children}</div>
    </>,
    document.getElementById("modal")
  );
}

export default InfoModal;
