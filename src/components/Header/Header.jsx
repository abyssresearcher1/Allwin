import React, { useState } from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/cart.png";
import favourites from "../../assets/favourites.svg";
import search from "../../assets/Search.png";
import styles from "./Header.module.css";
import cn from "classnames";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className={styles.Header}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header__general}>
            <div className={styles.header__logo}>
              <span>aalam</span>
              <button
                className={styles.burgerBtn}
                onClick={() => setMenu(!menu)}
              >
                <span></span>
                <span></span>
              </button>
            </div>
            <div className={cn(styles.navbar, { [styles.headerStyle]: menu })}>
              <nav className={styles.nav}>
                <Link to="/">Главная</Link>
                <Link to="#">Все товары</Link>
                <Link to="/About">О нас</Link>
                <Link to="/Delivery">Доставка</Link>
                <a
                  href="/#fullfilment"
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  Фулфилмент
                </a>
              </nav>
              <div className={styles.nav__right_side}>
                <div className={styles.nav__search}>
                  <input type="text" placeholder="Поиск" />
                  <img
                    src={search}
                    alt="Search"
                    className={styles.header__search}
                  />
                </div>
                <div className={styles.header__settings}>
                  <Link to="/Cart">
                    <img
                      src={cart}
                      alt="cartIcon"
                      className={styles.header__cart}
                    />
                  </Link>
                  <Link to="/Favourites">
                    <img
                      src={favourites}
                      alt="favoritesIcon"
                      className={styles.header__favorites}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
