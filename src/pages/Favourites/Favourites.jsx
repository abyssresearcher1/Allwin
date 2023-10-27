import React from "react";
import favouritesImg from "../../assets/favourites.webp";
import Layout from "../../components/Layout/Layout";
import styles from "./Favourites.module.css";

const Favourites = () => {
  return (
    <Layout>
      <section className={styles.favourites}>
        <div className={styles.favourites__general}>
          <div className={styles.favoutites__img}>
            <img src={favouritesImg} alt="" />
          </div>
          <div className={styles.favourites__info}>
            <h2>Избранные</h2>
            <p>Отсутствуют избранные товары</p>
            <button className={styles.favouritesBtn}>Перейти к покупке</button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Favourites;
