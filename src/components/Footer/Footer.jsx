import React from "react";
import whatsapp from "../../assets/whatsapp.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.footer__nav_block}>
          <div className={styles.footer__logo}>
            {/* <img src="" alt="" /> */}
            <span>aalam</span>
          </div>
          <div className={styles.footer__nav}>
            <a href="#">Все товары</a>
            <a href="#">О нас</a>
            <a href="#">Доставка</a>
            <a href="#">Категории</a>
            <a href="#">Фулфилмент</a>
          </div>
        </nav>
        <div className={styles.footer__line}>
          <hr />
        </div>
        <div className={styles.connect_with_us}>
          <h3>Связатсья по whatsapp</h3>
          <div className={styles.contacts}>
            <p>© 2023 «AALAM». Все права защищены</p>
            <button>
              Написать <img src={whatsapp} alt="whatsapp" className={styles.whatsapp} />
            </button>
            <p>Разработал Motion Web LLC</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;