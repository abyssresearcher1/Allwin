import React from "react";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import phone from "../../assets/phone.svg";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <img src={phone} alt="" className={styles.phone} />
      <img src={telegram} alt="" className={styles.telegram} />
      <img src={whatsapp} alt="" className={styles.whatsapp} />
    </section>
  );
};

export default Contacts;
