import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import favouritesImg from "../../assets/favourites.webp";
import Layout from "../../components/Layout/Layout";
import styles from "./Favourites.module.css";

const Favourites = () => {
  const [favouriteProduct, setFavouriteProduct] = useState(null);

  const getFavourites = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_MAIN_URL}/Favourites`
      );
      setFavouriteProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavourites();
  }, []);

  return (
    <Layout>
      {!favouriteProduct || favouriteProduct.length === 0 ? (
        <section className={styles.favourites}>
          <div className={styles.favourites__general}>
            <div className={styles.favoutites__img}>
              <img src={favouritesImg} alt="" />
              <Link to={"/products"}>
                <button className={styles.favouritesBtn}>
                  <Link to={"/Products"}>Выбрать товар</Link>
                </button>
              </Link>
            </div>
            <div className={styles.favourites__info}>
              <h2>Избранные</h2>
              <p>Отсутствуют избранные товары</p>
            </div>
          </div>
        </section>
      ) : (
        <div className={styles.favouriteProducts}>
          <div className={styles.favouritesCards}>
            {favouriteProduct.map((item) => {
              return (
                <div className={styles.favouritesCard}>
                  <div className={styles.FavouritesCard_image}>
                    <img src={item.image} alt="" />
                  </div>
                  <div className={styles.favouritesCard__info}>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Favourites;
