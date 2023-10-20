import React from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./About.module.css";
import logo from "../../assets/Aalam__logo.jpg";
import AboutBg from "../../assets/About__info_bg.webp";
import goalsImage from "../../assets/goalsImage.webp";
import towels from "../../assets/towels.webp";
import teamMainImage from "../../assets/team__main-image.webp";
import teamWomenImage from "../../assets/team__women-image.webp";
import teamMenImage from "../../assets/team__men-image.webp";

const About = () => {
  return (
    <Layout>
      <section className={styles.About}>
        <div className={styles.container}>
          <div className={styles.about__general}>
            <div className={styles.about__info}>
              <h2>
                Производители стильной мужской, <br /> женской и детской <br />{" "}
                одежды в Кыргзстане
              </h2>
              <p>
                Кроме готовых моделей одежды можем шить одежду любого дизайна
                под заказ, а также предлагать варианты на выбор заказчика.
              </p>
            </div>
            <div className={styles.about__info_image}>
              <img src={AboutBg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.goals}>
        <div className={styles.goals__general}>
          <div className={styles.goals__image}>
            <img src={goalsImage} alt="" />
          </div>
          <div className={styles.goals__info}>
            <h2>Цели</h2>
            <p>
              Наша цель - предоставить нашим клиентам услуги самого высокого
              качества, превзойти их ожидания и обеспечить хороший опыт покупок.
              Удовлетворенность наших клиентов всегда является для нас
              приоритетом, и этот принцип лежит в основе нашей работы.
            </p>
            <p className={styles.goals__optom}>
              Работаем с другими Фабриками и Цехами для производства изделий и
              брендов под ключ продавцов WB/OZON и крупных оптовиков.
            </p>
            <button className={styles.goalsBtn}>Каталог</button>
          </div>
        </div>
      </section>
      <section className={styles.assortiment}>
        <div className={styles.assortiment__general}>
          <div className={styles.assortiment__info}>
            <h2>АССОТРИМЕНТ</h2>
            <p>
              Мы предлагаем нашим клиентам множество преимуществ, таких как
              широкий ассортимент качественной продукции, доступные цены и
              быстрая гарантированная доставка.
            </p>
            <p>
              Для производства моделей одежды используются ткани высокого
              качества - шерсть, атлас, трикотин, хлопок, лен, штапель, вискоза,
              шифон, трикотаж и т.д.
            </p>
          </div>
          <div className={styles.assortiment__image}>
            <img src={towels} alt="towels" />
          </div>
        </div>
      </section>
      <section className={styles.team}>
        <div className={styles.team__general}>
          <div className={styles.team__info}>
            <h2>Команда</h2>
            <p>
              Имея многолетний опыт, мы <br /> продолжаем нашу работу с азартом и <br />
              преданностью первого дня.
            </p>
            <span>
              Мы ведем наш бизнес в соответствии с принципами честности, <br />
              уважения, сотрудничества и ориентации на клиента.
            </span>
          </div>
          <hr className={styles.team__line} />
          <div className={styles.team__images}>
            <div className={styles.team__main_image}>
              <img src={teamMainImage} alt="" />
            </div>
            <div className={styles.team__other_images}>
              <img src={teamWomenImage} alt="" />
              <img src={teamMenImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
