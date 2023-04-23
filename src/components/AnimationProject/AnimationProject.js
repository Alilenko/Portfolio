import React, { useEffect, useRef } from "react";
import Frame from "./Frame/Frame";

import yanki from "../../img/YankiShop.png";
import movie from "../../img/movie-app.png";
import weather from "../../img/Weather.png";
import yt from "../../img/yt-clone.png";
import education from "../../img/education_platform.png";
import drivers from "../../img/Driwers.png";

import "./AnimationProject.css";

const AnimationProject = () => {
  let zSpacing = -1000,
    lastPos = zSpacing / 5,
    zVals = [];
  const itemsRef = useRef([]);

  const setRef = (ref) => {
    itemsRef.current = itemsRef.push(ref);
  };

  const frames = [
    {
      paragraph: {
        h3: "Drivers",
        text: "React, React Router Dom v6, Firebase v9, Firestore, Bootstap-4. Сторінка реєстрації / авторизації з підключенням Firebase Authentication (реєстрація через email, google, номер телефону). Дані записуються у Firestore. Головний екран з майбутніми поїздками. Можливість бронювання поїздок користувачем. Сторінка редагування профілю.Сторінка створення нової подорожі. Сторінка адміністратора, на якій можна змінювати ролі користувачів і видаляти поїздки. Логін адміністратора: test@gmail.com, пароль testtest.",
      },
      textPos: "right",
      linkShow: "https://alilenko.github.io/drivers/",
      linkCode: "https://github.com/Alilenko/drivers",
    },
    { img: drivers, position: "left", bgFrame: true },
    {},
    {
      paragraph: {
        h3: "Платформа для навчання",
        text: "React, Redux-Toolkit, React Hooks, React-router, styled-components, react-player, moment. Реалізованно календар з розкладом занять на місяць та день та сторінка з відео занятями.",
      },
      textPos: "left",
      linkShow: "https://alilenko.github.io/education_platform/",
      linkCode: "https://github.com/Alilenko/education_platform",
    },
    { img: education, position: "right", bgFrame: true },
    {},
    {
      paragraph: {
        h3: "Youtube-clone",
        text: "React, Redux-Toolkit: RTK Query, React Hooks, React-router, Mui. Данні: RapidApi. Фільтрація по категоріями, перегляд відео та інформації про канал, пошук.",
      },
      textPos: "right",
      linkShow: "https://alilenko.github.io/youtube_clone",
      linkCode: "https://github.com/Alilenko/youtube_clone",
    },
    { img: yt, position: "left", bgFrame: true },
    {},
    {
      paragraph: {
        h3: "Інтернет магазин",
        text: "React. Redux-Toolkit, React-router-dom, i18next, Formik, Firebase/firestore, React-icons, localStorage, зміна мови додатку за допомогою бібліотеки i18next, додавання товарів в корзину, оформленя замовлення і відправка данних про замовлення firestore, додавання товарів в список обраних і збереження/отримання списку из localStorage, фільтрація товарів за категоріями.",
      },
      textPos: "left",
      linkShow: "https://alilenko.github.io/YankiShop/",
      linkCode: "https://github.com/Alilenko/YankiShop",
    },
    { img: yanki, position: "right", bgFrame: true },
    {},
    {
      paragraph: {
        h3: "Погода",
        text: "React+Redux Toolkit, TypeScript. Данні: openweathermap.org. Реалізовано отримання поточних даних погоди та даних прогнозованих на 7 днів",
      },
      textPos: "right",
      linkShow: "https://alilenko-weather.herokuapp.com/Weather",
      linkCode: "https://github.com/Alilenko/Weather",
    },
    { img: weather, position: "left", bgFrame: true },
    {},
    {
      paragraph: {
        h3: "Movie App",
        text: "React, Redux-Toolkit, React Hooks, React-router, Данні: themoviedb. Авторизація Firebase.  Каталог фільмів та серіалів, пошук.",
      },
      textPos: "left",
      linkShow: "https://alilenko.github.io/MovieApp/",
      linkCode: "https://github.com/Alilenko/MovieApp",
    },
    { img: movie, position: "right", bgFrame: true },
    { btn: "Більше", to: "/more-project" },
  ];

  useEffect(() => {
    const getScroll = () => {
      document.body.style.height = "4100px";
      let top = document.documentElement.scrollTop,
        delta = lastPos - top;
      lastPos = top;

      frames.forEach(function (n, i) {
        zVals.push(i * zSpacing + zSpacing);
        zVals[i] += delta * -5.5;
        let transform = `translateZ(${zVals[i]}px)`,
          opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
        itemsRef.current[i].setAttribute(
          "style",
          `transform: ${transform}; opacity: ${opacity}; visibility: ${
            opacity === 0 ? "hidden" : "visible"
          }; transition: visibility 0.5s ease, opacity 0.5s ease;`
        );
      });
    };
    getScroll();
    window.addEventListener("scroll", getScroll);
    return () => window.removeEventListener("scroll", getScroll);
  }, [window]);

  return (
    <div>
      <div className="container">
        <section className="gallery">
          {frames.map((item, i) => (
            <Frame key={i} i={i} item={item} itemsRef={itemsRef} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default AnimationProject;
