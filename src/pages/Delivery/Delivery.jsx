import React from "react";
import delivery from "../../assets/delivery.webp";
import Layout from "../../components/Layout/Layout";
import Questions from "../../components/Questions/Questions";
import styles from "./Delivery.module.css";

const Delivery = () => {
  return (
    <Layout>
      <section className={styles.delivery}>
        <div className={styles.delivery__general}>
          <div className={styles.delivery__title}>
            <button>Карго</button>
            <h2>Всегда в пути!</h2>
          </div>
          <div className={styles.delivery__image}>
            <img src={delivery} alt="" />
          </div>
        </div>
        <div className={styles.delivery__info}>
          <div className={styles.delivery__info_general}>
            <div>
              <h2>Доставка</h2>
              <p>
                Товары отправляются через <br /> логистические компании по{" "}
                <br /> выбору клиента
              </p>
              <span>
                Наш профессиональный подход <br /> позволят Вам не беспокоиться
                за <br />
                сохранность груза и <br /> своевременность доставки.
              </span>
            </div>
            <div className={styles.delivery__info_left_side}>
              <h3>Мы ищем лучшие решения</h3>
              <p>
                Учитываем каждую деталь заказа и <br /> специфику перевозимого
                груза.
              </p>
              <p>дешевле</p>
              <p>быстрее</p>
              <p>безопаснее</p>
            </div>
          </div>
        </div>
      </section>
      <Questions />
    </Layout>
  );
};

export default Delivery;
