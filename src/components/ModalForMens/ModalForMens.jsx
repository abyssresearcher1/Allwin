import React, { useState } from "react";
import styles from "./ModalForMens.module.css";

const ModalForMens = ({ setModalVisible }) => {
  const [modalContent, setModalContent] = useState("");

  const closeModal = () => {
    setTimeout(() => {
      setModalVisible(false);
      setModalContent("");
      console.log("dasd");
    }, 500);
  };

  return (
    <div
      className={styles.modal}
      onMouseLeave={closeModal}
      onMouseEnter={() => {
        setModalVisible(true);
      }}
    >
      <div className={styles.modalContent}>
        <div className={styles.mens__clothes}>
          <p>Одежда:</p>
          <a href="#">Футболки</a>
          <a href="#">Рубашки</a>
          <a href="#">Шорты</a>
          <a href="#">Белье</a>
          <a href="#">Обувь</a>
        </div>
      </div>
    </div>
  );
};

export default ModalForMens;
