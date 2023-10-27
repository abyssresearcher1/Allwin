import React from "react";
import styles from "./Cart.module.css";
import CartImg from "../../assets/Cart.webp";
import Layout from "../../components/Layout/Layout";

const Cart = () => {
  return (
    <Layout>
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
              <button className={styles.cartBtn}>Перейти к покупке</button>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
