import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import ModalForMens from "../../components/ModalForMens/ModalForMens";
import styles from "./Products.module.css";

const Products = () => {
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(30000);
  const [categories, setCategories] = useState(false);
  const [prices, setPrices] = useState(false);
  const [sizes, setSizes] = useState(false);
  const [products, setProducts] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_MAIN_URL}/clothes`
      );
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const showCategories = categories;

  const showPrice = prices;

  const showSizes = sizes;

  const openPrice = () => {
    setPrices(!prices);
  };

  const openSize = () => {
    setSizes(!sizes);
  };

  const openCategories = () => {
    setCategories(!categories);
  };

  const handleMinPriceChange = (e) => {
    const minValue = parseInt(e.target.value, 10);
    setMinPrice(minValue);
  };

  const handleMaxPriceChange = (e) => {
    const maxValue = parseInt(e.target.value, 10);
    setMaxPrice(maxValue);
  };

  const handleMouseEnter = (content) => {
    setModalContent(content);
    setModalVisible(true);
    console.log(content);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalContent("");
    console.log("dasd");
  };

  const AddToCart = async (item) => {
    try {
      await axios.post(`${process.env.REACT_APP_MAIN_URL}/Cart`, item);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <section className={styles.products}>
        <div className={styles.products__general}>
          <div className={styles.products__sidebar}>
            <div className={styles.categories}>
              <button className={styles.categoriesBtn} onClick={openCategories}>
                Категории
              </button>
              <div
                className={styles.categories__general}
                style={{ display: showCategories ? "block" : "none" }}
              >
                <div className={styles.news}>
                  {isModalVisible && (
                    <ModalForMens setModalVisible={setModalVisible} />
                  )}
                  <p onMouseEnter={() => handleMouseEnter("Для Мужчин")}>
                    Для Мужчин
                  </p>
                  <label>
                    <input type="checkbox" />
                  </label>
                </div>
                <div className={styles.recommended}>
                  <p>Для Женщин</p>
                  <label>
                    <input type="checkbox" />
                  </label>
                </div>
                <div className={styles.hits}>
                  <p>Для Детей</p>
                  <label>
                    <input type="checkbox" />
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.price}>
              <button className={styles.priceBtn} onClick={openPrice}>
                Цена
              </button>
              <div
                className={styles.priceDiaposone}
                style={{ display: showPrice ? "block" : "none" }}
              >
                <div className={styles.priceMinandMax}>
                  <input
                    type="number"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className={styles.priceInputs}
                  />
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className={styles.priceInputs}
                  />
                </div>
                <p>Минимальная цена</p>
                <input
                  type="range"
                  min="100"
                  max="30000"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                />
                <p>Максимальная цена</p>
                <input
                  type="range"
                  min="100"
                  max="30000"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                />
              </div>
            </div>
            <div className={styles.size}>
              <button className={styles.sizeBtn} onClick={openSize}>
                Размеры
              </button>
              <div
                className={styles.choose__size}
                style={{ display: showSizes ? "block" : "none" }}
              >
                <div className={styles.size__S}>
                  <p>S</p>
                  <label>
                    <input type="checkbox" />
                  </label>
                </div>
                <div className={styles.size__M}>
                  <p>M</p>
                  <label>
                    <input type="checkbox" />
                  </label>
                </div>
                <div className={styles.size__L}>
                  <p>L</p>
                  <label>
                    <input type="checkbox" />
                  </label>
                </div>
                <div className={styles.size__XL}>
                  <p>XL</p>
                  <label>
                    <input type="checkbox" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.allProducts}>
            <div className={styles.allProducts__general}>
              {products &&
                products.map((item) => {
                  return (
                    <div key={item.id} className={styles.products__cards}>
                      <Link to={`/Products/${item.id}`} className={styles.cardNav}>
                        <div className={styles.card}>
                          <div className={styles.product__image_block}>
                            <div
                              className={styles.product__image_block_main_image}
                            >
                              <img src={item.image} alt="product__image" />
                            </div>
                          </div>
                          <div className={styles.card__info}>
                            <p>{item.name}</p>
                            <span>Цена:{item.price} сом</span>
                            <p>
                              Цена за упаковку: {item.price * item.quantity}
                            </p>
                          </div>
                        </div>
                      </Link>
                      <button
                        onClick={() => {
                          AddToCart(item);
                        }}
                        className={styles.CartBtn}
                      >
                        add to cart
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
