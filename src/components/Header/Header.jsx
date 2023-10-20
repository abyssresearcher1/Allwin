import React from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/cart.png";
import favorites from "../../assets/favorites.svg";
import search from "../../assets/Search.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header__general}>
            <div className={styles.header__logo}>
              <span>aalam</span>
            </div>
            <div className={styles.navbar}>
              <nav className={styles.nav}>
                <Link to={"/"}>Главная</Link>
                <a href="#">Все товары</a>
                <Link to={"/About"}>О нас</Link>
                <Link to={"/Delivery"}>Доставка</Link>
                <a href="#">Фулфилмент</a>
                <div className={styles.nav__search}>
                  <input type="text" placeholder="Поиск" />
                  <img src={search} alt="Search" className={styles.header__search} />
                </div>
              </nav>
              <div className={styles.header__settings}>
                <img
                  src={cart}
                  alt="cartIcon"
                  className={styles.header__cart}
                />
                <img
                  src={favorites}
                  alt="favoritesIcon"
                  className={styles.header__favorites}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
