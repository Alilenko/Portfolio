import React, { useEffect, useRef } from "react";
import Frame from "./Frame/Frame";

import yanki from "../../img/YankiShop.png";
import movie from "../../img/movie-app.png";
import weather from "../../img/Weather.png";
import todo from "../../img/todo.png";
import conv from "../../img/conv.png";
import "./AnimationProject.css";

const AnimationProject = () => {
  let zSpacing = -1000,
    lastPos = zSpacing / 5,
    zVals = [];
  const ref0 = useRef(0);
  const ref1 = useRef(0);
  const ref2 = useRef(0);
  const ref3 = useRef(0);
  const ref4 = useRef(0);
  const ref5 = useRef(0);
  const ref6 = useRef(0);
  const ref7 = useRef(0);
  const ref8 = useRef(0);
  const ref9 = useRef(0);
  const ref10 = useRef(0);
  const ref11 = useRef(0);
  const ref12 = useRef(0);
  const ref13 = useRef(0);
  const ref14 = useRef(0);

  const frames = [
    {
      paragraph: {
        h3: "Movie App",
        text: "React, Redux-Toolkit, React Hooks, React-router, Данні: themoviedb. Авторизація Firebase. ",
      },
      ref: ref0,
      textPos: "right",
      linkShow: "https://alilenko.github.io/MovieApp/",
      linkCode: "https://github.com/Alilenko/MovieApp",
    },
    { img: movie, ref: ref1, position: "left", bgFrame: true },
    { ref: ref2 },
    {
      paragraph: {
        h3: "Інтернет магазин",
        text: "React. Redux-Toolkit, React-router-dom, i18next, Formik, Firebase/firestore, React-icons, localStorage, зміна мови додатку за допомогою бібліотеки i18next, додавання товарів в корзину, оформленя замовлення і відправка данних про замовлення firestore, додавання товарів в список обраних і збереження/отримання списку из localStorage, фільтрація товарів за категоріями.",
      },
      ref: ref3,
      textPos: "left",
      linkShow: "https://alilenko.github.io/YankiShop/",
      linkCode: "https://github.com/Alilenko/YankiShop",
    },
    { img: yanki, ref: ref4, position: "right", bgFrame: true },
    { ref: ref5 },
    {
      paragraph: {
        h3: "Погода",
        text: "React+Redux Toolkit, TypeScript. Данні: openweathermap.org. Реалізовано отримання поточних даних погоди та даних прогнозованих на 7 днів",
      },
      ref: ref6,
      textPos: "right",
      linkShow: "https://alilenko-weather.herokuapp.com/Weather",
      linkCode: "https://github.com/Alilenko/Weather",
    },
    { img: weather, ref: ref7, position: "left", bgFrame: true },
    { ref: ref8 },
    {
      paragraph: {
        h3: "Список справ/покупок",
        text: "React+Redux. Додаток у якому реалізовано додавання та видалення записів, фільтрація, пошук.",
      },
      ref: ref9,
      textPos: "left",
      linkShow: "https://alilenko.github.io/TodoList/",
      linkCode: "https://github.com/Alilenko/TodoList",
    },
    { img: todo, ref: ref10, position: "right", bgFrame: true },
    { ref: ref11 },
    {
      paragraph: {
        h3: "Конвертер валют",
        text: "Данні: bank.gov.ua. Отримання значення від користувача та конвертація у чотири валюти.",
      },
      ref: ref12,
      textPos: "right",
      linkShow: "https://codepen.io/Alilenko/pen/qBXXrNv",
      linkCode: "https://github.com/Alilenko/converter",
    },
    { img: conv, ref: ref13, position: "left", bgFrame: true },
    { ref: ref14, btn: "Більше", to: "/more-project" },
  ];

  useEffect(() => {
    const getScroll = () => {
      document.body.style.height = "3400px";
      let top = document.documentElement.scrollTop,
        delta = lastPos - top;
      lastPos = top;

      frames.forEach(function (n, i) {
        zVals.push(i * zSpacing + zSpacing);
        zVals[i] += delta * -5.5;
        let refArr = [
          ref0,
          ref1,
          ref2,
          ref3,
          ref4,
          ref5,
          ref6,
          ref7,
          ref8,
          ref9,
          ref10,
          ref11,
          ref12,
          ref13,
          ref14,
        ];
        let transform = `translateZ(${zVals[i]}px)`,
          opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;

        refArr[i].current.setAttribute(
          "style",
          `transform: ${transform}; opacity: ${opacity}; visibility: ${
            opacity === 0 ? "hidden" : "visible"
          }`
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
            <Frame key={i} item={item} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default AnimationProject;
