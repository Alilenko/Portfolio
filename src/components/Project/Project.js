import React from 'react';
import './project.css';
import shop from '../../img/shop.png';
import todo from '../../img/todo.png'
import conv from '../../img/conv.png'
import hunger from '../../img/hunger.png'
import shopRedux from '../../img/ShopRedux.png'
import weather from '../../img/Weather.png'
import movie from '../../img/movie-app.png'
import ProjectItem from '../ProjectItem/ProjectItem';

const project = [
    {
        id: 7,
        title: 'Movie App',
        descr: 'React, Redux-Toolkit, React Hooks, React-router, Получение данных themoviedb. Авторизация Firebase. ',
        linkShow: 'https://alilenko.github.io/MovieApp/',
        linkCode: 'https://github.com/Alilenko/MovieApp',
        img: movie
    },
    {
        id: 6,
        title: 'Погода',
        descr: 'React+Redux Toolkit, TypeScript. Получение данных API openweathermap.org. Реализованно получение текущих данных погоды и данных прогнозируемых на 7 дней',
        linkShow: 'https://alilenko-weather.herokuapp.com/Weather',
        linkCode: 'https://github.com/Alilenko/Weather',
        img: weather
    },
    {
        id: 1,
        title: 'Интернет магазин',
        descr: 'React+Redux Toolkit. Динамическое формирование карточки товаров и категорий. Фильтрация товаров по категориям. Поиск товаров на странице. SPA, две страницы: главная и корзина. Добавление и удаление товаров из корзины. Добавление и удаление количества товаров. Формирование общей стоимости товаров.',
        linkShow: 'https://alilenko.github.io/ShopReduxToolkit/',
        linkCode: 'https://github.com/Alilenko/ShopReduxToolkit',
        img: shopRedux
    },
    {
        id: 2,
        title: 'Интернет магазин',
        descr: 'React+Redux. приложение в котором реализованно: Получение товаров с помощью fetch запроса. Динамическое формирование карточки товаров. Поиск товаров на странице. Добавление и удаление товаров из корзины и количества. Формирование общей стоимости товаров.',
        linkShow: 'https://alilenko.github.io/TestShop/',
        linkCode: 'https://github.com/Alilenko/TestShop',
        img: shop
    },
    {
        id: 3,
        title: 'Список дел/покупок',
        descr: 'React+Redux. Простое приложение в котором реализовано добавление и удаление записей, фильтрация, поиск.',
        linkShow: 'https://alilenko.github.io/TodoList/',
        linkCode: 'https://github.com/Alilenko/TodoList',
        img: todo
    },
    {
        id: 4,
        title: 'Конвертор валют',
        descr: 'Приложение конвертор валют. В проекте реализованно: получение данных из API с помощью fetch. Использование хуков useState, useEffect. Получение значения от пользователя и конвертация в четыре валюты.',
        linkShow: 'https://codepen.io/Alilenko/pen/qBXXrNv',
        linkCode: 'https://github.com/Alilenko/converter',
        img: conv
    },
    {
        id: 5,
        title: 'Landing Page страница ресторана',
        descr: 'HTML, CSS, JavaScript. В проекте  реализованно: Адаптивная верстка. Фиксированный header который исчезает при скролле вниз и выезжает при прокрутке вверх. Слайдер с помощью библиотеки Swiper. При клике на кнопки навигации плавная прокрутка к якорю. Секция меню которая меняется в зависимости от выбраной категории. Галерея. Добавленна Google карта.',
        linkShow: 'https://alilenko.github.io/Restaurant/',
        linkCode: 'https://github.com/Alilenko/Restaurant/tree/main',
        img: hunger
    },
]

const Project = () => {
    return (
        <div className='skills'>
               <div className='text'></div>
           <div className='card-row'>
               {
                   project.map((item) => (
                       <ProjectItem item={item} key={item.id}/>
                   ))
               }
            </div>
       </div>

       
    )
}

export default Project

