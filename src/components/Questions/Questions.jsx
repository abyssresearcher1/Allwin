import React from "react";
import styles from "./Questions.module.css";

const Questions = () => {
  return (
    <section className={styles.questions}>
      <div className={styles.questions__general}>
        <div className={styles.questions__info}>
          <h3>Есть вопросы?</h3>
          <p>Оставьте ваши данные. Мы с вами свяжемся!</p>
        </div>
        <div className={styles.questions__input}>
          <input type="text" placeholder="ФИО" />
          <input type="text" placeholder="Номер" />
          <button>Отправить</button>
        </div>
      </div>
    </section>
  );
};

export default Questions;
