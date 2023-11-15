import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import CartImg from "../../assets/Cart.webp";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import trash from "../../assets/delete.svg";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [productQuantities, setProductQuantities] = useState({});

  const getCart = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_MAIN_URL}/Cart`
      );
      setCart(data);
      setProductQuantities(
        data.reduce((quantities, item) => {
          quantities[item.id] = 1; // Set the default quantity to 1
          return quantities;
        }, {})
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const plusProductQuantity = (id) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const minusProductQuantity = (id) => {c
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 0) - 1, 0),
    }));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + item.price * (productQuantities[item.id] || 0);
    }, 0);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_MAIN_URL}/Cart/${productId}`);
      getCart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      {!cart || cart.length === 0 ? (
        <section className={styles.cart}>
          <div className={styles.container}>
            <div className={styles.cart__general}>
              <div className={styles.cart__img}>
                <img src={CartImg} alt="" />
              </div>
              <div className={styles.cart__info}>
                <h2> Ваша корзина пуста</h2>
                <p>Начните покупки прямо сейчас и добавьте в нее товары!</p>
              </div>
            </div>
            <Link to="/Products">
              <button className={styles.cartBtn}>Перейти к покупке</button>{" "}
            </Link>
          </div>
        </section>
      ) : (
        <div className={styles.cards}>
          <div className={styles.cart__cards}>
            {cart.map((item) => (
              <div key={item.id} className={styles.cart__block}>
                <div className={styles.cart_item_image}>
                  <img src={item.image} alt="" />
                </div>
                <div className={styles.cart_info}>
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                </div>
                <div className={styles.item__quantity}>
                  <button onClick={() => minusProductQuantity(item.id)}>
                    -
                  </button>
                  <p>{productQuantities[item.id]}</p>
                  <button onClick={() => plusProductQuantity(item.id)}>
                    +
                  </button>
                </div>
                <div className={styles.product__price}>
                  <p>{item.price * productQuantities[item.id]} Com</p>
                </div>
                <div className={styles.delete}>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => {
                      deleteProduct(item.id);
                    }}
                  >
                    <img src={trash} alt="" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.checkout}>
            <p>Total Price: {calculateTotalPrice()} Com</p>
            <button>Оформить заказ!</button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Cart;
