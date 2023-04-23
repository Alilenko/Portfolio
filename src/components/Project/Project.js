import React, { useEffect } from "react";
import "./project.css";
import shop from "../../img/shop.png";
import todo from "../../img/todo.png";
import conv from "../../img/conv.png";
import hunger from "../../img/hunger.png";
import shopRedux from "../../img/ShopRedux.png";
import weather from "../../img/Weather.png";
import movie from "../../img/movie-app.png";
import yankiShop from "../../img/YankiShop.png";
import yt from "../../img/yt-clone.png";
import education from "../../img/education_platform.png";
import drivers from "../../img/Driwers.png";
import tracker from "../../img/Tracker.png";
import ProjectItem from "../ProjectItem/ProjectItem";

const project = [
  {
    id: 15,
    title: "Drivers. Додаток бронювання поїздок",
    descr:
      "React, React Router Dom v6, Firebase v9, Firestore, Bootstap-4. Сторінка реєстрації / авторизації з підключенням Firebase Authentication (реєстрація через email, google, номер телефону). Дані записуються у Firestore. Головний екран з майбутніми поїздками. Можливість бронювання поїздок користувачем. Сторінка редагування профілю.Сторінка створення нової подорожі. Сторінка адміністратора, на якій можна змінювати ролі користувачів і видаляти поїздки. Логін адміністратора: test@gmail.com, пароль testtest.",
    linkShow: "https://alilenko.github.io/drivers/",
    linkCode: "https://github.com/Alilenko/drivers",
    img: drivers,
  },
  {
    id: 10,
    title: "Education Platform",
    descr:
      "React, Redux-Toolkit, React Hooks, React-router, styled-components, react-player, moment. Реалізованно календар з розкладом занять на місяць та день та сторінка з відео занятями.",
    linkShow: "https://alilenko.github.io/education_platform/",
    linkCode: "https://github.com/Alilenko/education_platform",
    img: education,
  },
  {
    id: 16,
    title: "Tracker",
    descr:
      "React, Redux-Toolkit, moment. Трекер часу. Продовжує рахувати час навіть після закриття сторінки",
    linkShow: "https://alilenko.github.io/Tracker/",
    linkCode: "https://github.com/Alilenko/Tracker",
    img: tracker,
  },
  {
    id: 9,
    title: "Youtube-clone",
    descr:
      "React, Redux-Toolkit: RTK Query, React Hooks, React-router, Mui, react-player, timeago.js. Данні: RapidApi. Фільтрація по категоріями, перегляд відео та інформації про канал, пошук. ",
    linkShow: "https://alilenko.github.io/youtube_clone",
    linkCode: "https://github.com/Alilenko/youtube_clone",
    img: yt,
  },

  {
    id: 8,
    title: "Інтернет магазин",
    descr:
      "React. Redux-Toolkit, React-router-dom, i18next, Formik, Firebase/firestore, React-icons, localStorage, зміна мови додатку за допомогою бібліотеки i18next, додавання товарів в корзину, оформленя замовлення і відправка данних про замовлення firestore, додавання товарів в список обраних і збереження/отримання списку из localStorage, фільтрація товарів за категоріями.",
    linkShow: "https://alilenko.github.io/YankiShop/",
    linkCode: "https://github.com/Alilenko/YankiShop",
    img: yankiShop,
  },

  {
    id: 7,
    title: "Movie App",
    descr:
      "React, Redux-Toolkit, React Hooks, React-router, Данні: themoviedb. Авторизація Firebase. Каталог фільмів та серіалів, пошук.",
    linkShow: "https://alilenko.github.io/MovieApp/",
    linkCode: "https://github.com/Alilenko/MovieApp",
    img: movie,
  },
  {
    id: 6,
    title: "Погода",
    descr:
      "React+Redux Toolkit, TypeScript. Данні: openweathermap.org. Реалізовано отримання поточних даних погоди та даних прогнозованих на 7 днів",
    linkShow: "https://alilenko-weather.herokuapp.com/Weather",
    linkCode: "https://github.com/Alilenko/Weather",
    img: weather,
  },
  {
    id: 1,
    title: "Інтернет магазин",
    descr:
      "React+Redux Toolkit. Динамічне формування картки товарів та категорій. Фільтрування товарів за категоріями. Пошук товарів на сторінці. SPA, дві сторінки: головна та кошик. Додавання та видалення товарів з кошика. Додавання та видалення кількості товарів. Формування загальної вартості товарів. ",
    linkShow: "https://alilenko.github.io/ShopReduxToolkit/",
    linkCode: "https://github.com/Alilenko/ShopReduxToolkit",
    img: shopRedux,
  },
  {
    id: 2,
    title: "Інтернет магазин",
    descr:
      "React+Redux. додаток в якому реалізовано: Отримання товарів за допомогою fetch запиту. Динамічне формування картки товарів. Пошук товарів на сторінці. Додавання та видалення товарів з кошика та зміна кількості. Формування загальної вартості товарів.",
    linkShow: "https://alilenko.github.io/TestShop/",
    linkCode: "https://github.com/Alilenko/TestShop",
    img: shop,
  },
  {
    id: 3,
    title: "Список справ/покупок",
    descr:
      "React+Redux. Додаток у якому реалізовано додавання та видалення записів, фільтрація, пошук.",
    linkShow: "https://alilenko.github.io/TodoList/",
    linkCode: "https://github.com/Alilenko/TodoList",
    img: todo,
  },
  {
    id: 4,
    title: "Конвертер валют",
    descr:
      "Данні: bank.gov.ua. Отримання значення від користувача та конвертація у чотири валюти.",
    linkShow: "https://codepen.io/Alilenko/pen/qBXXrNv",
    linkCode: "https://github.com/Alilenko/converter",
    img: conv,
  },
  {
    id: 5,
    title: "Сторінка ресторану",
    descr:
      "HTML, CSS, JavaScript, Swiper Адаптивна верстка, Галерея, Google maps",
    linkShow: "https://alilenko.github.io/Restaurant/",
    linkCode: "https://github.com/Alilenko/Restaurant/tree/main",
    img: hunger,
  },
];

const Project = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.style.height = "100vh";
  }, []);

  return (
    <div className="skills">
      <div className="text"></div>
      <div className="card-row">
        {project.map((item) => (
          <ProjectItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Project;
