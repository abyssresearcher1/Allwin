import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Layout from "../../components/Layout/Layout";
import favourite from "../../assets/favourites.svg";

import styles from "./ProductDetails.module.css";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  const getClothes = async () => {
    try {
      const clothes = await axios.get(
        `${process.env.REACT_APP_MAIN_URL}/clothes/${id}`
      );
      setData(clothes.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClothes();
  }, []);

  const addToCart = async (data) => {
    try {
      await axios.post(`${process.env.REACT_APP_MAIN_URL}/Cart`, data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavourite = async (data) => {
    try {
      await axios.post(`${process.env.REACT_APP_MAIN_URL}/Favourites`, data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className={styles.product}>
        <div className={styles.product__general}>
          <div className={styles.product__image}>
            <img src={data.image} alt="product-main-image" />
          </div>
          <div className={styles.variants}>
            {data.variants &&
              data.variants.map((item) => {
                return (
                  <img
                    src={item.image}
                    alt=""
                    className={styles.image__variants}
                  />
                );
              })}
          </div>
          <div className={styles.product__info}>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <p>{data.size}</p>
          </div>
        </div>
        <div className={styles.product__checkout}>
          <div className={styles.favourite}>
            <span>{data.price} Com</span>
            <button
              className={styles.addToFavouriteBtn}
              onClick={() => {
                addToFavourite(data);
              }}
            >
              <img src={favourite} alt="" />
            </button>
          </div>
          <div className={styles.favouriteBtns}>
            <button
              onClick={() => {
                addToCart(data);
              }}
              className={styles.addToCartBtn}
            >
              В корзину
            </button>
            <button className={styles.buyBtn}>
              <Link to={"/checkout"}>Купить Сейчас</Link>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
