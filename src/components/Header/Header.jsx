import React, { useState } from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/cart.png";
import favourites from "../../assets/favourites.svg";
import search from "../../assets/Search.png";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(!false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(!false);
  };

  const burgerMenuStyle = {
    backgroundColor: isMenuOpen ? "transparent" : "black",
  };

  const headerStyle = {
    display: isMenuOpen ? "block" : "none",
  };

  return (
    <div className={styles.Header}>
      <div className={styles.burger__menu} style={burgerMenuStyle}>
        <span>aalam</span>
        <button onClick={handleMenuToggle} className={styles.openMenuBtn}>
          {isMenuOpen ? "Close" : "Open"}
        </button>
      </div>
      <header className={styles.header} style={headerStyle}>
        <div className={styles.container}>
          <div className={styles.header__general}>
            <div className={styles.header__logo}>
              <span>aalam</span>
            </div>
            <div className={styles.navbar}>
              <nav
                className={`${styles.nav} ${isMenuOpen ? styles.openMenu : ""}`}
              >
                <Link to="/" onClick={closeMenu}>
                  Главная
                </Link>
                <Link to="#" onClick={closeMenu}>
                  Все товары
                </Link>
                <Link to="/About" onClick={closeMenu}>
                  О нас
                </Link>
                <Link to="/Delivery" onClick={closeMenu}>
                  Доставка
                </Link>
                <a href="/#fullfilment" onClick={closeMenu}>
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
                  <Link to="/Cart" onClick={closeMenu}>
                    <img
                      src={cart}
                      alt="cartIcon"
                      className={styles.header__cart}
                    />
                  </Link>
                  <Link to="/Favourites" onClick={closeMenu}>
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
