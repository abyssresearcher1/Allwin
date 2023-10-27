import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Questions from "../../components/Questions/Questions"
import styles from "./MainPage.module.css";
import recommended from "../../assets/sundry__recommended.webp";
import hit from "../../assets/hit.webp";
import news from "../../assets/sundry__news.webp";
import basket from "../../assets/basket.svg";
import mensClothes from "../../assets/mensClothes.webp";
import womensClothes from "../../assets/womensClothes.webp";
import kidsClothes from "../../assets/kidsClothes.webp";
import coin from "../../assets/coin.svg";
import shoper from "../../assets/shoper.svg";
import like from "../../assets/like.svg";
import arrow from "../../assets/arrow.svg";
import fullfilment from "../../assets/box-tick.webp";

const MainPage = () => {
  const [clothes, setClothes] = useState(null);

  const getClothes = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_MAIN_URL}/clothes`
      );
      setClothes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClothes();
  }, []);

  return (
    <Layout>
      <section className={styles.main}>
        <div className={styles.container}>
          <div className={styles.redShadow}></div>
          <div className={styles.yellowShadow}></div>
          <div className={styles.main__general}>
            <div className={styles.main__info}>
              <h1 className={styles.h1}>
                оптом
                <span>
                  одежда <br />{" "}
                </span>
                из Кыргызстана
              </h1>
              <p>
                От производителя, без посредников. <br />
                Найдите лучшие товары вместе с нами!
              </p>
              <div className={styles.advantages}>
                <div className={styles.advantages__info}>
                  <p>Выгодно</p>
                  <p>Надежно</p>
                  <p>Удобно</p>
                </div>
                <div className={styles.advantages__catalog}>
                  <button>Каталог</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sundry}>
        <div className={styles.sundry__general}>
          <div className={styles.sundry__left_side}>
            <div className={styles.sundry__news}>
              <div className={styles.sundry__news_image}>
                <img
                  src={news}
                  alt="new__clothes"
                  className={styles.new__clothes}
                />
                <img src={arrow} alt="arrow" className={styles.news_arrow} />
              </div>
              <h2>Новинки</h2>
              <a>Для мужчин</a>
              <a href="#">Для детей</a>
              <a href="#">Для женщин</a>
            </div>
          </div>
          <div className={styles.sundry__right_side}>
            <div className={styles.sundry__recommended}>
              <img
                src={recommended}
                alt="recommended"
                className={styles.recommended}
              />
              <img
                src={arrow}
                alt="arrow"
                className={styles.recommended_arrow}
              />
              <h2>Рекомендуемые</h2>
            </div>
            <div className={styles.sundry__hits}>
              <img src={hit} alt="" className={styles.hits} />
              <img src={arrow} alt="arrow" className={styles.hits_arrow} />
              <h2>Хит продаж</h2>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.cards}>
        <div className={styles.card}>
          {clothes &&
            clothes.slice(0, 5).map((item) => {
              return (
                <div className={styles.card__item} key={item.id}>
                  <div className={styles.card__image_block}>
                    <img
                      src={item.image}
                      alt="cardImage"
                      className={styles.card__image}
                    />
                    <img src={basket} alt="basket" className={styles.basket} />
                  </div>
                  <div className={styles.card__info}>
                    <div className={styles.card__info_text}>
                      <span>Двойки</span>
                      <p className={styles.product__cost}>{item.price}сом</p>
                      <p>Уп: {item.price * item.quantity}сом</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className={styles.allProducts}>
          <button className={styles.allProductsBtn}>Все товары</button>
        </div>
      </section>
      <section className={styles.categories}>
        <div>
          <h2>Категории</h2>
        </div>
        <div className={styles.categories__general}>
          <div className={styles.mens__clothes}>
            <img
              src={mensClothes}
              alt="asdasd"
              className={styles.categories__images}
            />
            <div className={styles.men__clothes_info_block}>
              <h3>Мужская одежда</h3>
              <div className={styles.mens__clothes_info}>
                <a href="">футболки</a>
                <a href="">Спортивки</a>
                <a href="">Брюки</a>
              </div>
            </div>
          </div>
          <div className={styles.womens__clothes}>
            <img
              src={womensClothes}
              alt="asdasd"
              className={styles.categories__images}
            />
            <div className={styles.womens__clothes_info_block}>
              <h3>Женская одежда</h3>
              <div className={styles.womens__clothes_info}>
                <a href="#">Платья</a>
                <a href="#">Двойки</a>
                <a href="#">Юбки</a>
              </div>
            </div>
          </div>
          <div className={styles.kids__clothes}>
            <img
              src={kidsClothes}
              alt="asdasd"
              className={styles.categories__images}
            />
            <div className={styles.kids__clothes_info_block}>
              <h3>одежда</h3>
              <div className={styles.kids__clothes_info}>
                <a href="#">Кепки</a>
                <a href="#">Сарафаны</a>
                <a href="#">Футболки</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.fullfilment} id="fullfilment">
        <div className={styles.fullfilment__general}>
          <div className={styles.fullfilment__info}>
            <div className={styles.fullfilment__title}>
              <img src={fullfilment} alt="" className={styles.fullfilment__box} />
              <h2>Бесплатный фулфилмент</h2>
            </div>
            <h3>
              Приобретая товар у нас, вы абсолютно <br /> бесплатно получите
              услуги фулфилмента.
            </h3>
            <p>
              Мы проверяем товар на брак, упаковываем, <br /> маркируем и
              отправляем через Карго в ваш город.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.advantages__cards}>
        <div className={styles.advantages__cards_general}>
          <div className={styles.price__card}>
            <div>
              {" "}
              <img src={coin} alt="coin" className={styles.coin} />
            </div>
            <h2>Доступные цены</h2>
            <p>
              Aalam опережает своих конкурентов по соотношению цены и качества.
              Вы можете найти самые популярные модели нового сезона и высокое
              качество вместе взятые.
            </p>
          </div>
          <div className={styles.order__card}>
            <div>
              <img src={shoper} alt="shoper" className={styles.shoper} />
            </div>
            <h2>
              Индивидуальные <br /> заказы
            </h2>
            <p>
              Кроме готовых моделей одежды можем шить одежду любого дизайна под
              заказ, а также предлагать варианты на выбор заказчика
            </p>
          </div>
          <div className={styles.delivery__card}>
            <div>
              <img src={like} alt="like" className={styles.like} />
            </div>
            <h2>Быстрая доставка</h2>
            <p>
              Товары отправляются через логистические компании по выбору клиента
            </p>
          </div>
        </div>
      </section>
      <Questions />
    </Layout>
  );
};

export default MainPage;
